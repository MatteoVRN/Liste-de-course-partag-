let listeZoom = null;

document.getElementById('ajoutListe').addEventListener('click', function CreationListe() { // Création d'une liste

    const listeDiv = document.createElement('div');
    listeDiv.className = 'liste'; //CSS
    const listeTitre = document.createElement('h2');
    listeTitre.contentEditable = 'true' // permet de modifier le titre de la liste
    listeTitre.textContent = 'Saisissez le titre...'; // texte par défaut
    listeDiv.appendChild(listeTitre);

    const catdiv = ' <div id="Fruits"> Fruits <br/></div><div id="Légumes"> Legumes <br/></div><div id="Viandes"> Viandes <br/></div><div id="Boissons"></div><div id="Produits laitiers"></div><div id="Surgelés"></div><div id="Autres"> </div> '
    listeDiv.appendChild(catdiv);

    // Agrandissement de la liste 
    
    listeDiv.addEventListener('click', function zoom() {

        if (listeZoom == null) { // Si aucune liste est agrandie, alors :
            listeDiv.style.width = '80vw'; //largeur
            listeDiv.style.height = '80vh'; //hauteur 
            listeDiv.style.zIndex = '1000'; //définit l'ordre de propriété de superposition des éléments
            listeDiv.style.margin = '100px';
            listeDiv.style.position = 'absolute'; //positionnement';
            listeDiv.style.overflow = 'auto'; //permet le défilement qd trop d'élts
            listeZoom = listeDiv; // La liste est donc agrandie 
        }
    });

    //Réinitialiser l'apparence de la lkiste 
    function dezoom() {
        if (listeZoom != null) {
            // Rétablir les propriétés CSS initiales
            listeZoom.style.removeProperty('width');
            listeZoom.style.removeProperty('height');
            listeZoom.style.removeProperty('z-index');
            listeZoom.style.position = 'static';
            listeZoom.style.removeProperty('margin');
            listeZoom.style.removeProperty('overflow');
            listeZoom = null; //aucune liste agrandie 
        }
    }

    //Si touche echap, active dezoom
    document.addEventListener('keydown', function(event) {
        if (event.key == 'Escape') {
            dezoom();
        }
    });

    //Bouton retour
document.getElementById('retour').addEventListener('click', function() {
        dezoom();
    });

    // Création du bouton '+'
    const addButton = document.createElement('button');
    addButton.textContent = '+';
    listeDiv.appendChild(addButton);

    // Ajout d'aliments quand on clique dessus 
    addButton.addEventListener('click', function() {
        const alimentDiv = document.createElement('div');
        alimentDiv.className = 'aliment';

        const alimentInput = document.createElement('input');
        alimentInput.type = 'text';
        alimentInput.placeholder = 'Nom de l\'aliment';
        alimentDiv.appendChild(alimentInput);

        const quantiteInput = document.createElement('input');
        quantiteInput.type = 'number';
        quantiteInput.placeholder = 'Quantité';
        quantiteInput.min = '1';
        alimentDiv.appendChild(quantiteInput);

        const catInput = document.createElement('select');
        const opfruit = document.createElement('option');
        const opleg = document.createElement('option');
        const opboi = document.createElement('option');
        const opvia = document.createElement('option');
        const oplai = document.createElement('option');
        const opsur = document.createElement('option');
        const opautre = document.createElement('option');
        
        catInput.name = 'cat';
        catInput.id = 'cat';
        catInput.placeholder = 'Catégorie';
        catInput.size ='1';
        opfruit.value = 'Fruits';
        opfruit.textContent = 'Fruits';
        catInput.appendChild(opfruit);
        opleg.value = 'Legumes';
        opleg.textContent = 'Legumes';
        catInput.appendChild(opleg);
        opboi.value = 'Boissons';
        opboi.textContent = 'Boissons';
        catInput.appendChild(opboi);
        opvia.value = 'Viandes';
        opvia.textContent = 'Viandes';
        catInput.appendChild(opvia);
        oplai.value = 'Laits';
        oplai.textContent = 'Laits';
        catInput.appendChild(oplai);
        opsur.value = 'Surgelés';
        opsur.textContent = 'Surgelés';
        catInput.appendChild(opsur);
        opautre.value = 'Autres';
        opautre.textContent = 'Autres';
        catInput.appendChild(opautre);
        alimentDiv.appendChild(catInput);
           /* <option value = "FRUITS">Fruits</option>
            <option value = "LEGUMES">Légumes</option>
            <option value = "LAITIERS">Produits laitiers</option>
            <option value = "VIANDES">Viandes</option>
            <option value = "BOISSONS">Boissons</option>
            <option value = "SURGELES">Surgelés</option>
            <option value = "AUTRES"> Autres</option>*/
        
        const commentInput = document.createElement('input');
        commentInput.type = 'text';
        commentInput.placeholder = 'Commentaire facultatif';
        alimentDiv.appendChild(commentInput);

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.value = 'done';
        alimentDiv.appendChild(checkbox);

        const supprimerButton = document.createElement('button');
        supprimerButton.textContent = 'X';
        alimentDiv.appendChild(supprimerButton);
        
const catprod = catInput.value;
const divcorres = document.getElementById(catprod);
divcorres.appendChild(alimentDiv);

        /*const selectElement = document.getElementById("");

        selectElement.addEventListener("change", (event) => {
          const selectedValue = event.target.value;
          console.log(selectedValue);
        });
*/

         
        // Suppression de l'aliment quand on clique sur le bouton 'X'
        supprimerButton.addEventListener('click', function() {
            
            alimentDiv.remove();
        });
    });


    //Ajout de la nouvelle liste sur la page avec le reste des listes
document.getElementById('liste').appendChild(listeDiv);
    liste.className = 'page';

});

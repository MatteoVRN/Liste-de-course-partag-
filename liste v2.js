let listeZoom = null;

document.getElementById('ajoutListe').addEventListener('click', function CreationListe() { // Création d'une liste

  const listeDiv = document.createElement('div');
  listeDiv.className = 'liste'; //CSS
  const listeTitre = document.createElement('h2');
  listeTitre.contentEditable = 'true' // permet de modifier le titre de la liste
  listeTitre.textContent = 'Saisissez le titre...'; // texte par défaut
  listeDiv.appendChild(listeTitre);

  const categories = ['Fruits', 'Legumes', 'Viandes', 'Boissons', 'Surgelés', 'Produits laitiers', 'Autres' ];
const diffCat = {}; // objet vide qui va stocker les diff catégories
for (let categorie of categories) {
    const cat = document.createElement('div');
    cat.id = categorie;
    cat.innerHTML = '<h4>' + categorie + '</h4>';
    diffCat[categorie] = cat;
    listeDiv.appendChild(cat);
}

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
          listeZoom = null; //aucune liste agrandie, on la réduit
      }
  }

  //Si touche echap, active dezoom
  document.addEventListener('keydown', function(event) {
      if(event.key == 'Escape') {
          dezoom();
      }
  });

  //Bouton retour
  document.getElementById('retour').addEventListener('click', function () {
      dezoom();
  });

  // Création du bouton '+'
  const addButton = document.createElement('button');
  addButton.textContent = '+'; //petit logo
  listeDiv.appendChild(addButton);

  // Clic bouton '+'
  addButton.addEventListener('click', function() {
      // Création de la fenêtre contextuelle
      const pop = document.createElement('div'); //ouvre pop up
      pop.className = 'pop'; // CSS
      pop.style.display = 'none';

      //normalement creation des trucs pour php ?? du genre :
      const form = document.createElement('form'); // je crée un formulaire pour recup les données en PHP
      // form.action = '/chemin/vers mon php' // je crois qu'on l'a pas encore

      // form.method = 'post'; // 'post' car envoie des données
      pop.appendChild(form);

      // Ajout des champs de formulaire à la fenêtre contextuelle
      /* const catInput = document.createElement('input');
      catInput.name = 'categorie';
      catInput.placeholder = 'Catégorie';
      form.appendChild(catInput); */

      const catInput = document.createElement('select');
        const opfruit = document.createElement('option');
        const opleg = document.createElement('option');
        const opboi = document.createElement('option');
        const opvia = document.createElement('option');
        const oplai = document.createElement('option');
        const opsur = document.createElement('option');
        const opautre = document.createElement('option');

        catInput.name = 'cat'; // cat pout catégorie
        catInput.id = 'cat';
        catInput.placeholder = 'Catégorie';
        catInput.size = '1';
        opfruit.value = 'Fruits'; //op pour option
        opfruit.textContent = 'Fruits';
        catInput.appendChild(opfruit);
        opleg.value = 'Legumes'; // leg pour legumes
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
        form.appendChild(catInput);

      const nomInput = document.createElement('input');
      nomInput.name = 'nomAliment'
      nomInput.placeholder = 'Nom de l\'aliment';
      form.appendChild(nomInput);

      const quantiteInput = document.createElement('input');
      quantiteInput.type = 'number';
      quantiteInput.placeholder = 'Quantité';
      quantiteInput.min = '1';
      form.appendChild(quantiteInput);

      const notesInput = document.createElement('textarea');
      notesInput.name = 'notes';
      notesInput.placeholder = 'Notes ou commentaires';
      form.appendChild(notesInput);

      // Ajout d'un bouton de soumission à la fenêtre contextuelle
      const submitButton = document.createElement('button');
      submitButton.type = 'submit';
      submitButton.textContent = 'Ajouter';
      form.appendChild(submitButton);

      // Ajout des aliments à la liste qd clic sur 'ajouter'
      submitButton.addEventListener('click', function() {

        event.preventDefault(); // je veux pas que la page se refresh pr l'instant, avant de PHP
          // Liste des aliments
          const listItem = document.createElement('div');
          listItem.className = 'list-item';
          listItem.textContent = /* catInput.value + ': ' + */quantiteInput.value + ' - ' + nomInput.value + ' - ' + notesInput.value;

          // Mettre la div de la bonne catégorie 
          const catDiv = document.getElementById(catInput.value);

          // Ajout de l'élément à la liste, mais surtout la bonne catégorie 
          catDiv.appendChild(listItem);

          // Fermeture de la fenêtre contextuelle
          pop.style.display = 'none';
      });

      // Affichage de la fenêtre contextuelle
      pop.style.display = 'block';
      listeDiv.appendChild(pop);
  });

  //Ajout de la nouvelle liste sur la page avec le reste des listes
  document.getElementById('liste').appendChild(listeDiv);
  liste.className = 'page'; // CSS

});

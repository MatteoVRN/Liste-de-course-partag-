var liste = [];
var divliste = document.getElementById("liste");
var categories = ["Fruits", "Légumes", "Viandes", "Boissons", "Autres"]; 
function AddItem() {
  let produit = new Array(3);
  
  produit[0] = prompt("Entrez le nom du produit");
  produit[1] = prompt ("Entrez la catégorie du produit");
  /*var categorieIndex = prompt("Choisissez la catégorie du produit :\n" + categories.join("\n"));
  // Convertir l'entrée de l'utilisateur en un index numérique
  categorieIndex = parseInt(categorieIndex);
  if (!isNaN(categorieIndex) && categorieIndex >= 0 && categorieIndex < categories.length) {
      produit[1] = categories[categorieIndex];
  } else {
      produit[1] = prompt("Veuillez entrer la catégorie du produit :");
  }
*/
  produit[2] = prompt ("Entrez la quantité du produit");
  liste.push(produit);
}

function afficherListe(){
  divliste.innerHTML = "";
  liste.forEach(function(item){
    var texte = document.createTextNode(item[0] + " " + item[1] + " " + item[2])
    divliste.appendChild(texte);
    var sautLigne = document.createElement("br");
    divliste.appendChild(sautLigne);
  });
}

function supp(){
  let info = false;
  var ASupp = prompt("Quel élément voulez-vous supprimer ? (tapez le nom)");
  liste.forEach(function(item){
    if (item[0] == ASupp){
      var index = liste.indexOf(item);
      liste.splice(index, 1);
      info = true;
    }  
  });
  afficherListe();
  if (info == false){
    alert("Le produit n'est pas dans la liste. Veuillez réessayer!");
  }
}


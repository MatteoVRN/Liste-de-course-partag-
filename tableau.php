<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Liste de course partagée</title>
</head>

<body>
  <p> TEST </p>

  <div class="rectangle">
    <p class="titre"> LISTE DE COURSE PARTAGEE </p>
  </div>

  <div class="separation-horiz"></div>

  <br>
  
  <form action="" method="post" class="center">

    <fieldset>
      <legend> Créer un compte </legend>

      <label for="prenom">Prénom :</label>
      <input type="text" id="prenom" name="prenom" maxlength="50" required><br>

      <label for="nom">Nom de famille :</label>
      <input type="text" id="nom" name="nom" maxlength="50" required><br>

      <label for="email">Adresse e-mail :</label>
      <input type="email" id="email" name="email" required><br>

      <div class="center">
        <button type="reset" id="reset_button">REINITIALISER LES CHAMPS</button>
        <input type="submit" name="submit" value="SAUVEGARDER MES DONNEES">
      </div>
    </fieldset>
  </form>

  <?php

    $fichier = fopen("texte.txt","r+");
    $stock[] = array('Prénom' => 'J' , 'Nom de famille' => 'J' , 'email' => 'j@gmail.com'); 

    require("recupdonne.php");

    isset($_POST["prenom"]);
    isset($_POST["nom"]);
    isset($_POST["email"]);

    $x = $_POST["prenom"];
    $y = $_POST["nom"];
    $z = $_POST["email"];

    fwrite($fichier,$x."".';'.$y."".';'.$z."".';');

    $stock[] = array('Prénom' => $x , 'Nom de famille' => $y , 'email' => $z); 

    foreach($stock as $row ){
        foreach ( $row as $element ) {
        echo "$element ";
        }
        echo "<br>";
        }

    fclose($fichier);
    
?>



</body>

</html>

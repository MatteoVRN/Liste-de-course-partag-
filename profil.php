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
    $stock = array('Prénom', 'Nom de famille', 'email'); 

   isset( $_POST['prenom'] );
   isset( $_POST['nom'] );
   isset( $_POST['email'] );

    $x = $_POST["prenom"];
    $y = $_POST["nom"];
    $z = $_POST["email"];

    //$stock[0] = $x;
    //$stock[1] = $y;
    //$stock[2] = $z;

    array_push($stock, $x, $y, $z);

    $p="";
    for ($i = 0; $i < count($stock); $i++) {
        $p = 'Ligne n '. $i.''. $stock[$i] .'';
        echo $p;
        echo '<br>';
    }

?>



</body>

</html>

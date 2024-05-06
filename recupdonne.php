<?php

    $fichier = fopen("texte.txt","r");
  
    $stock=array();
    while (!feof($fichier)) {
        $line =   fgetcsv( $fichier,null,";");
        if(is_array($line))  {
            $stock[] = array('Prénom' => $line[0], 'Nom de famille' => $line[1] , 'email' => $line[2]); 
        }


    }
    
    fclose($fichier);
    
?>
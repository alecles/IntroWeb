function btnCalculer_onclick()
{ 
 	var nbAdulte;
 	var prixAdu = 20;

    var nbEtudiant;
    var prixEtu = 12;

    var nbAgeDoré;
    var prixDor = 15;
    var nbBillet;
    var prix;




    nbEtudiant = parseFloat(document.getElementById("nbEtudiant").value);
    nbAdulte = parseFloat(document.getElementById("nbAdulte").value);
    nbAgeDoré = parseFloat(document.getElementById("nbAgeDoré").value);


    prix = (nbAdulte * prixAdu) + (nbEtudiant * prixEtu) + (nbAgeDoré * prixDor);
    nbBillet = nbAdulte + nbEtudiant + nbAgeDoré;

    if (nbBillet > 5)
    {
        prix = prix / 1.10;

    }

    console.log(prix.toFixed(2))
    console.log("Le montant total est de :" +prix + "$");


}





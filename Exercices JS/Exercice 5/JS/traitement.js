function btnCalculer_onclick()
{ 
 	var Déplacement;
    var Reste;
    var Nourriture;
    var Revenu;
    var Loyer;


    Déplacement = parseFloat(document.getElementById("Déplacement").value);
    Loyer = parseFloat(document.getElementById("Loyer").value);
    Revenu = parseFloat(document.getElementById("Revenu").value);
    Nourriture = parseFloat(document.getElementById("Nourriture").value);

    Reste = Revenu -(Loyer + Nourriture + Déplacement);
    Reste = Reste/4.33

    console.log(Reste.toFixed(2))
    console.log("Le montant de votre rest par année est de :" +Reste);


}





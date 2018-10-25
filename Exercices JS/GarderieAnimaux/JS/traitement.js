function btnCalculer_onclick()
{ 
 	var Veterinaire;
 	var NbJour;
 	var Service;
 	var Toilettage;
 	var Animal;
 	var Total;

    Veterinaire = document.getElementById("lstVeterinaire").value;
    NbJour = parseFloat(document.getElementById("txtNbreJours").value);


    if (document.getElementById("chkServ").checked == true)
    {
        Service = 5;
        Toilettage = "avec";
    }

    else
    {
        Service = 0;
        Toilettage = "sans";
    }

    if (document.getElementById("radChien").checked == true)
    {
        Animal = "Chien";
        Total = 18.50;
    }

    else
    {
        Animal = "Chat";
        Total = 16.95;

    }

    Total = (Total * NbJour * 1.14975) + Service ;



    console.log("Vétérinaire responsable est " +Veterinaire+ ". Le montant pour la garde de votre " +Animal+ " est de " +Total.toFixed(2)+ " pour " +NbJour+ ", " +Toilettage+ " service de toilettage.");
}
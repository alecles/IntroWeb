function btnCalculer_onclick()
{ 
 	var Veterinaire;
 	var NbJour;
 	var Service;
 	var Toilettage;
 	var Animal;
 	var Total;
 	var RabaisJ;
 	var NbreHeure;
 	var Salaire;

    Veterinaire = document.getElementById("lstVeterinaire").value;
    NbJour = parseFloat(document.getElementById("txtNbreJours").value);
    NbreHeure = parseFloat(document.getElementById("txtNbreHeure").value);


    switch (Veterinaire)
    {
        case "Audrey Bouchard": Salaire = 25; break;
        case "Stéphane Tremblay": Salaire = 35; break;
        case "Maxime Simard": Salaire = 40; break;
        case "Mélissa Caron": Salaire = 45; break;
    }

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

    if (NbJour < 5)
    {
        RabaisJ = 1;
    }

    else if (NbJour >= 5 && NbJour < 10)
    {
        RabaisJ = 1.05;
    }

    else if (NbJour >= 10 && NbJour < 30)
    {
        RabaisJ = 1.1;
    }

    else if (NbJour > 30)
    {
        RabaisJ = 1.15;
    }

    Total = (Total * 1.14975 * Salaire * NbreHeure) + Service;
    Total = Total / RabaisJ;



    console.log("Vétérinaire responsable est " +Veterinaire+ ". Le montant pour la garde de votre " +Animal+ " est de " +Total.toFixed(2)+ " pour " +NbJour+ " jours, " +Toilettage+ " service de toilettage.");
}

function btnAfficher_onclick()
{
    document.getElementById("img1").src = "img/boxer-mix-mongrel-from-cdc6-diaporama.jpg";
}

function btnAfficher2_onclick()
{
    document.getElementById("img2").src = "img/chat-double-face-chimère-700x460.jpg";
}
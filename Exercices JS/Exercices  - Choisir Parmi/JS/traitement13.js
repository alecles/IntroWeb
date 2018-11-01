function btnCalculer_onclick()
{ 
 	var Num;
 	var Jour;

 	Num = parseFloat(document.getElementById("txtNumSem").value);

    switch (Num)
    {
        case 1 : Jour = "Dimanche"; break;
        case 2: Jour = "Lundi"; break;
        case 3: Jour = "Mardi"; break;
        case 4: Jour = "Mercredi"; break;
        case 5: Jour = "Jeudi"; break;
        case 6: Jour = "Vendredi"; break;
        case 7: Jour = "Samedi"; break;

    }
    console.log("Il est " +Jour);
}
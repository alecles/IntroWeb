function btnCalculer_onclick()
{ 
 	var Num;
 	var Jour;

 	Num = parseFloat(document.getElementById("txtNumSem").value)

    if (Num == 1)
    {
        Jour = "Dimanche"
    }

    else if (Num == 2)
    {
        Jour = "Lundi"
    }

    else if (Num == 3)
    {
        Jour = "Mardi"
    }

    else if (Num == 4)
    {
        Jour = "Mercredi"
    }

    else if (Num == 5)
    {
        Jour = "Jeudi"
    }

    else if (Num == 6)
    {
        Jour = "Vendredi"
    }

    else
    {
        Jour = "Samedi"
    }

    console.log("Il est " +Jour);
}
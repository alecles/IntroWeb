function btnCalculer_onclick()
{ 
 	var Nbre1;
 	var Nbre2;
 	var Nbre3;
    var Nbre4 = 3;

   Nbre1 = parseFloat(document.getElementById("txtNbre1").value);
   Nbre2 = parseFloat(document.getElementById("txtNbre2").value);
   Nbre3 = parseFloat(document.getElementById("txtNbre3").value);

    if (Nbre1 >= Nbre2 && Nbre2 != Nbre3)
    {
        Nbre4 = Nbre4 + 2 * Nbre1;
    }

   else if (Nbre1 == Nbre2 || Nbre2 > Nbre3)
    {
        Nbre4 = Nbre4 + Nbre1;
    }

    else
    {
        Nbre4 = Nbre4 * Nbre2 / Nbre1 - Nbre3;
    }

    console.log("Le résultat est:" + Nbre4);
}
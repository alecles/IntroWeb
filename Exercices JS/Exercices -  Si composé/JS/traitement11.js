function btnCalculer_onclick()
{ 
 	var Nbr1;
 	var Nbr2;
 	var signe;

 	Nbr1 = parseFloat(document.getElementById("txtNbre1").value);
    Nbr2 = parseFloat(document.getElementById("txtNbre2").value);

    if (Nbr1 <= 0 && Nbr2 <= 0 || Nbr1 >= 0 && Nbr2 >= 0)
    {
        signe = "Positif"
    }

    else
    {
        signe = "Négatif"
    }

    console.log("Le signe est " + signe);
}
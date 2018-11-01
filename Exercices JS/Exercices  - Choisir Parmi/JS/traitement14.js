function btnCalculer_onclick()
{ 
 	var Nbre1;
 	var Nbre2;
 	var Operateur = "";
 	var Res;

 	Nbre1 = parseFloat(document.getElementById("txtNbre1").value);
    Nbre2 = parseFloat(document.getElementById("txtNbre2").value);
    Operateur = document.getElementById("txtOperateur").value;

    if (Operateur == "+")
    {
        Res = Nbre1 + Nbre2;
    }

    else if (Operateur == "-")
    {
        Res = Nbre1 - Nbre2;
    }

    else if (Operateur == "*")
    {
        Res = Nbre1 * Nbre2;
    }

    else if (Operateur == "/")
    {
        Res = Nbre1 / Nbre2;
    }

    console.log(Res.toFixed(2));
    console.log("Le résultat est:" + Res);
}
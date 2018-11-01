function btnCalculer_onclick()
{ 
 	var Nbre1;
 	var Nbre2;
 	var Operateur = "";
 	var Res;

 	Nbre1 = parseFloat(document.getElementById("txtNbre1").value);
    Nbre2 = parseFloat(document.getElementById("txtNbre2").value);
    Operateur = document.getElementById("txtOperateur").value;

    switch (Operateur)
    {
        case "+": Res = Nbre1 + Nbre2; break;
        case "-": Res = Nbre1 - Nbre2; break;
        case "*": Res = Nbre1 * Nbre2; break;
        case "/": Res = Nbre1 / Nbre2; break;

    }


    console.log(Res.toFixed(2));
    console.log("Le résultat est:" + Res);
}
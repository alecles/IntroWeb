function btnCalculer_onclick()
{ 
 	var Nbre1, Nbre2, Res;


 	Nbre1 = parseFloat(document.getElementById("txtNbre1").value);
    Nbre2 = parseFloat(document.getElementById("txtNbre2").value);


   Res = OperateurCalculer();

    AfficherInfonfo();
}

function OperateurCalculer(Nbre1, Nbre2, Res)
{
    var Operateur = "";
    Operateur = document.getElementById("txtOperateur").value;

    switch (Operateur)
    {
        case "+": Res = Nbre1 + Nbre2; break;
        case "-": Res = Nbre1 - Nbre2; break;
        case "*": Res = Nbre1 * Nbre2; break;
        case "/": Res = Nbre1 / Nbre2; break;

    }
    return Res;
}

function AfficherInfo(Res)
{
    console.log(Res.toFixed(2));
    console.log("Le résultat est:" + Res);
}
function btnCalculer_onclick()
{
    if (ValideChampsObligatoire() == true)
    {
        if (ValideFormats() == true)
        {
            TraiteInfos();
            afficherInfo();
        }
    }

}


function TraiteInfos()
{
    var Nbre1,Nbre2,Res,Operateur;

    Nbre1 = parseFloat(document.getElementById("txtNbre1").value);
    Nbre2 = parseFloat(document.getElementById("txtNbre2").value);
    Operateur = document.getElementById("txtOperateur").value;
    Res = Calculer(Nbre1,Nbre2,Operateur);

}

function Calculer(Nbre1,Nbre2,Operateur)
{
    var Res;

    switch (Operateur)
    {
        case "+":
            Res = Nbre1 + Nbre2;
            break;
        case "-":
            Res = Nbre1 - Nbre2;
            break;
        case "*":
            Res = Nbre1 * Nbre2;
            break;
        case "/":
            Res = Nbre1 / Nbre2;
            break;

    }
    return Res;
}

function afficherInfo(Res)
{
    console.log("Le résultat est:" + Res.toFixed(2));

}


function ValideFormats()
{
    var Valide = true;

    if (ValideNo(document.getElementById("txtNbre1").value) === false)
    {
        Valide = false;
        document.getElementById("txtNbre1").style.backgroundColor = "red";
    }
    else
    {
        document.getElementById("txtNbre1").style.backgroundColor = "white";
    }

    if (ValideNo(document.getElementById("txtNbre2").value) === false)
{
    Valide = false;
    document.getElementById("txtNbre2").style.backgroundColor = "red";
}
else
{
    document.getElementById("txtNbre2").style.backgroundColor = "white";
}

return Valide;
}

function ValideNo(chaine)
{
    return /^[0-9]+$/.test(chaine);
}


function ValideChampsObligatoire()
{
    var Valide = false;

    if (ValideExist("txtNbre1") === true && ValideExist("txtNbre2") === true && ValideExist("txtOperateur") === true)
    {
        Valide = true;

    }

    return Valide;
}

function ValideExist(nomID)
{
    var Valide = true;

    if (document.getElementById(nomID).value === "")
    {
        Valide = false;
        document.getElementById(nomID).style.backgroundColor = "red";

    }

    else
    {
        document.getElementById(nomID).style.backgroundColor = "white";
    }

    return Valide;
}

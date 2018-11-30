function frmMembre_onclick()
{
    if (valideTousChampsObligatoires() === true)
    {
        if (valideFormats() === true)
        {
            traiterInfo();
        }
    }
}

function valideTousChampsObligatoires()
{
    var i;
    var tableau = new Array("txtNom","txtPrenom","txtAdresse","txtCodePostal","txtVille","txtTel","txtCodePerm");
    var Valide = true;

    for (i = 0; i < tableau.length; i++)
    {
        if (validExist(tableau[i]) === false)
        {
            Valide = false;
        }
        return Valide;
    }

}

function valideFormats()
{
    var Valide = true;

    if (valideNomPrenomVille(document.getElementById("txtNom").value) == false)
    {
        document.getElementById("txtNom").style.borderColor = "red";
        Valide = false;
    }
    else
    {
        document.getElementById("txtNom").style.borderColor = "grey";
        Valide = true;
    }


    if (valideNomPrenomVille(document.getElementById("txtPrenom").value) == false)
    {
        document.getElementById("txtPrenom").style.borderColor = "red";
        Valide = false;
    }
    else
    {
        document.getElementById("txtPrenom").style.borderColor = "grey";
        Valide = true;
    }

    if (valideNomPrenomVille(document.getElementById("txtVille").value) == false)
    {
        document.getElementById("txtVille").style.borderColor = "red";
        Valide = false;
    }
    else
    {
        document.getElementById("txtVille").style.borderColor = "grey";
        Valide = true;
    }

    if (valideAdresse(document.getElementById("txtAdresse").value) == false)
    {
        document.getElementById("txtAdresse").style.borderColor = "red";
        Valide = false;
    }
    else
    {
        document.getElementById("txtAdresse").style.borderColor = "grey";
        Valide = true;
    }

    if (validePostal(document.getElementById("txtCodePostal").value) == false)
    {
        document.getElementById("txtCodePostal").style.borderColor = "red";
        Valide = false;
    }
    else
    {
        document.getElementById("txtCodePostal").style.borderColor = "grey";
        Valide = true;
    }

    if (valideTel(document.getElementById("txtTel").value) == false)
    {
        document.getElementById("txtTel").style.borderColor = "red";
        Valide = false;
    }
    else
    {
        document.getElementById("txtTel").style.borderColor = "grey";
        Valide = true;
    }

    if (valideCode(document.getElementById("txtCodePerm").value) == false)
    {
        document.getElementById("txtCodePerm").style.borderColor = "red";
        Valide = false;
    }
    else
    {
        document.getElementById("txtCodePerm").style.borderColor = "grey";
        Valide = true;
    }

    return Valide;
}

function valideNomPrenomVille(chaine)
{
    return /^(([A-Ë]|[a-ë])+(-)?([A-Ë]|[a-ë])+)$/.test(chaine);
}

function valideAdresse(chaine)
{
    return /^([A-z]|[0-9]+)$/.test(chaine);
}

function validePostal(chaine)
{
    return /^([A-z]{1}[0-9]{1}[A-z]{1} [0-9]{1}[A-z]{1}[0-9]{1} [A-z]{1}[0-9]{1}[A-z]{1})$/.test(chaine);
}

function valideTel(chaine)
{
    return /^(([0-9]{3}-|\([0-9]{3}\) )[0-9]{3}-[0-9]{4})$/.test(chaine);
}

function valideCode(chaine)
{
    return /^[A-z]{4}[0-9]{8}$/.test(chaine);
}

function traiterInfo()
{

}

function confirm()
{

}
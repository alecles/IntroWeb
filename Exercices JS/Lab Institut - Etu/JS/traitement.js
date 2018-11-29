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
    var Valide = false;
    for (i = 0; i< tableau.length; i++)
    {
        if (validExist(tableau[i]) === true)
        {
            Valide = true;
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

    else if (valideNomPrenomVille(document.getElementById("txtPrenom").value) == false)
    {
        document.getElementById("txtPrenom").style.borderColor = "red";
        Valide = false;
    }

    else if (valideNomPrenomVille(document.getElementById("txtVille").value) == false)
    {
        document.getElementById("txtVille").style.borderColor = "red";
        Valide = false;
    }

    else if (valideAdresse(document.getElementById("txtAdresse").value) == false)
    {
        document.getElementById("txtAdresse").style.borderColor = "red";
        Valide = false;
    }

    else if (validePostal(document.getElementById("txtCodePostal").value) == false)
    {
        document.getElementById("txtCodePostal").style.borderColor = "red";
        Valide = false;
    }

    else if (valideTel(document.getElementById("txtTel").value) == false)
    {
        document.getElementById("txtTel").style.borderColor = "red";
        Valide = false;
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

function traiterInfo()
{

}

function confirm()
{

}
function frmMembre_onsubmit()
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
    var tableau = new Array("txtNom","txtPrenom","txtAdresse","txtVille","txtTel");
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

function validExist(NomId)
{
    var Validation;

    if (document.getElementById(NomId).value === "")
    {
        document.getElementById(NomId).innerHTML ="Vous devez compléter les champs ayant une étoile.";
        Validation = false;
    }
    else
    {
        document.getElementById(NomId).style.borderColor = "";
        Validation = true;
    }
    return Validation;
}

function valideFormats()
{
    var Valide = true;

    if (valideNom(document.getElementById("txtNom").value) === false)
    {

        document.getElementById("txtNom").style.borderColor = "red";
        Valide = false;
    }
    else
    {
        document.getElementById("txtNom").style.borderColor = "";
        Valide = true;
    }

    if (validePrenom(document.getElementById("txtPrenom").value) === false)
    {
        document.getElementById("txtPrenom").style.borderColor = "red";
        Valide = false;
    }
    else
    {
        document.getElementById("txtPrenom").style.borderColor = "";
        Valide = true;
    }

    if (valideVille(document.getElementById("txtVille").value) === false)
    {
        document.getElementById("txtVille").style.borderColor = "red";
        Valide = false;
    }
    else
    {
        document.getElementById("txtVille").style.borderColor = "";
        Valide = true;
    }

    if (valideAdresse(document.getElementById("txtAdresse").value) === "")
    {
        document.getElementById("txtAdresse").style.borderColor = "red";
        Valide = false;
    }
    else
    {
        document.getElementById("txtAdresse").style.borderColor = "";
        Valide = true;
    }

    if (validePostal(document.getElementById("txtCodePostal").value) === false)
    {
        document.getElementById("txtCodePostal").style.borderColor = "red";
        Valide = false;
    }
    else
    {
        document.getElementById("txtCodePostal").style.borderColor = "";
        Valide = true;
    }

    if (valideTel(document.getElementById("txtTel").value) === false)
    {
        document.getElementById("txtTel").style.borderColor = "red";
        Valide = false;
    }
    else
    {
        document.getElementById("txtTel").style.borderColor = "";
        Valide = true;
    }

    if (valideCode(document.getElementById("txtCodePerm").value) === false)
    {
        document.getElementById("txtCodePerm").style.borderColor = "red";
        Valide = false;
    }
    else
    {
        document.getElementById("txtCodePerm").style.borderColor = "";
        Valide = true;
    }

    return Valide;
}

function valideNom(chaine)
{
    return /^(([A-Ë]|[a-ë])+(-)?([A-Ë]|[a-ë])+)$/.test(chaine);
}

function validePrenom(chaine)
{
    return /^(([A-Ë]|[a-ë])+(-)?([A-Ë]|[a-ë])+)$/.test(chaine);
}

function valideAdresse(chaine)
{
    return /^(([A-Ë]|[0-9])+)$/.test(chaine);
}

function valideVille(chaine)
{
    return /^(([A-Ë]|[a-ë])+(-)?([A-Ë]|[a-ë])+)$/.test(chaine);
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
    var type = document.getElementById("type").value;
    var Prix;

    if(type === "adulte")
    {
        Prix = 90;
    }

    if (type === "étudiant")
    {
        Prix = 60;
    }

    if (type === "retraité")
    {
        Prix = 80;
    }
    return Prix;
}
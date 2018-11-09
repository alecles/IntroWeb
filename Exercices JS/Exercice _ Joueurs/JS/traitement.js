var CptJoueur = 0;
var tabPoint = new Array(4);
var tabJoueur = new Array(4);



function btnAjouter_onclick()
{

    var Nom =document.getElementById("btnRechercher".value);
    var Points = parseFloat(document.getElementById("txtPoints").value);
    tabJoueur[CptJoueur] = Nom;
    tabPoint[CptJoueur] = Points;
    CptJoueur ++;
    ActiverOption();
    document.getElementById("lblNbreJoueur").innerHTML = "Numéro du joueur "+(CptJoueur + 1);
}

function ActiverOption()
{
    if (CptJoueur > 3)
    {
        document.getElementById("btnTrouverMoy").disabled = false;
        document.getElementById("btnAjouter").disabled = true;
        document.getElementById("btnTrouverMeilleur").disabled = false;
        document.getElementById("btnTrouverPire").disabled = false;
        document.getElementById("btnRechercher").disabled = false;
    }

}

function btnTrouverMoy_onclick()
{
    var i, Moyenne = 0;
    for (i=0;i<tabJoueur.length; i++)
    {
        Moyenne+= tabPoint[i];
    }
    Moyenne = Moyenne/tabJoueur.length;
    console.log("La moyenne est de " +Moyenne);
    document.getElementById("lblReponse").innerHTML = "La moyenne est de " +Moyenne;
}

function btnTrouverMeilleur_onclick()
{
    var i, PtsMeilleur = 0, NomMeilleur, Meilleur;
    for (i = 0; i < tabJoueur.length; i++)
    {
        if (Meilleur <= tabPoint[i])
        {
            Meilleur = tabPoint[i];
            PtsMeilleur = tabPoint[i];
            NomMeilleur = tabJoueur[i];
        }
    }
    console.log("Le meilleur pointage est de " +PtsMeilleur);
    document.getElementById("lblReponse").innerHTML = "Le meilleur joueur est " +NomMeilleur+ " qui a obtenu la note de " +PtsMeilleur;
}

function btnTrouverPire_onclick()
{
        var i, PtsPire = 0, NomPire, Pire;
        for (i = 0; i < tabJoueur.length; i++)
        {
            if (Pire >= tabPoint[i])
            {
                Pire = tabPoint[i];
                PtsPire = tabPoint[i];
                NomPire = tabJoueur[i];
            }
        }
        console.log("Le pire pointage est de " +PtsPire);
        document.getElementById("lblReponse").innerHTML = "Le pire joueur est " + NomPire+" qui a obtenu la note de " +PtsPire;
}

    function btnRechercher_onclick()
    {
        var NomRechercher = document.getElementById("txtNom").value;
        var TrouverNom = false;

        while (TrouverNom == false)
        {
            var i=0;
            if (NomRechercher== tabJoueur[i] && tabJoueur[i] <4)
            {
                document.getElementById("lblReponse").innerHTML = " Le score du joueur " +NomRechercher+ " est de " +tabPoint[i];
                TrouverNom = true;
            }

            else
            {
                i++;
            }

        }

        if (TrouverNom == true)
        {
            document.getElementById("lblReponse").innerHTML = "Le nombre de point de" +tabJoueur[i]+ " est de " +tabPoint[i];
        }

        else
            {
            document.getElementById("lblReponse").innerHTML = "Le nom que vous chercher est introuvable."
            }
    }


var Nom, NbrNom, Points, Moyenne, meilleurPointage, i;
var tabPoint = new Array(NbrNom);
var tabJoueur = new Array(NbrNom);

function btnRechercher_onclick()
{
calculerJoueurs();


}

function btnAjouter_onclick()
{ 


}

function btnTrouverPire_onclick()
{


}

function btnTrouverMeilleur_onclick()
{


}

function btnTrouverMoy_onclick()
{


}

function saisirInfo()
{
    Nom =document.getElementById("btnRechercher".value);
    Points = parseInt(document.getElementById("txtPoints").value);
}

function calculerJoueurs()
{
    NbrNom += 1;
    document.getElementById("lblJoueur").innerHTML = "Le nom du joueur est: " + NbrNom;
}

function saisirMoy()
{
    for (i = 0; i < tabPoint.length; i++)
    {
        Moyenne+= Points;
    }
    Moyenne = Moyenne / tabPoint.length;
    document.getElementById("lblReponse").innerHTML = "La moyenne est de:  "+Moyenne;
}

function saisirMeilleurPointage()
{
    for (i = 0; i < tabPoint.length; i++)
    {
        if (i <= tabPoint[i])
        {
            meilleurPointage = i;
        }
    }
    document.getElementById("lblReponse").innerHTML = "Le meilleur pointage est:  "+meilleurPointage+" réalisé par "+NbrNom;
}

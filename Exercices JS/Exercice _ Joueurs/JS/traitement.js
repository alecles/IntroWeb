var Nom,Points;
var cptNom=0;nombrePoint=0;
var tabPoint = new Array(4);
var tabJoueur = new Array(4);
function btnRechercher_onclick()
{
    rechercherJoueur();
}
function  btnAjouter_onclick()
{
    saisirInformation();
    calculerJoueurs();
    ajouterCondition();
    changerJoueur();
}
function btnTrouverMoy_onclick()
{
    saisirMoyenne();
}
function btnTrouverMeilleur_onclick()
{

    SaisirMeilleurPointage();
}
function btnTrouverPire_onclick()
{

    SaisirPirePointage();
}
function saisirInformation()
{
    Nom=document.getElementById("txtNom").value;
    Points= parseInt(document.getElementById("txtPoints").value);
}
function calculerJoueurs()
{
    cptNom++;
    tabJoueur[cptNom-1]=Nom;
    tabPoint[cptNom-1]=Points;
}
function saisirMoyenne ()
{
    var i,moyenne=0;
    for(i=0;i<tabPoint.length;i++)
    {
        moyenne+=tabPoint[i];
    }
    moyenne=moyenne/tabPoint.length;
    document.getElementById("lblReponse").innerHTML="La moyenne est de  " + moyenne;
}
function SaisirMeilleurPointage()
{
    var i,meilleurJoueur,meilleurPointage;

    var max=0;

    for(i=0;i<tabPoint.length;i++)
    {
        if(max<=tabPoint[i])
        {
            max=tabPoint[i];
            meilleurPointage=tabPoint[i];
            meilleurJoueur=tabJoueur[i];

        }
    }
    document.getElementById("lblReponse").innerHTML="Le meilleur pointage est de  " + meilleurPointage + " réalisé par "+meilleurJoueur;
}
function ajouterCondition() {

    if ( cptNom>=0&&cptNom>3)
    {
        document.getElementById("btnAjouter").disabled = true;
        document.getElementById("btnRechercher").disabled = false;
        document.getElementById("btnTrouverMoy").disabled = false;
        document.getElementById("btnTrouverMeilleur").disabled = false;
        document.getElementById("btnTrouverPire").disabled = false;
    }
}

function SaisirPirePointage()
{
    var i,pireJoueur,pirePoints;

    var pire=100;

    for(i=0;i<tabPoint.length;i++)
    {
        if(pire>=tabPoint[i])
        {
            pire=tabPoint[i];
            pirePoints=tabPoint[i];
            pireJoueur=tabJoueur[i];
        }

    }
    document.getElementById("lblReponse").innerHTML="Le pire pointage est de  " +pirePoints + " réalisé par "+ pireJoueur;
}
function changerJoueur()
{
    document.getElementById("lblNbreJoueur").innerHTML="Numéro du joueur " +(cptNom+1);
}
function rechercherJoueur()
{
    var trouver=false;
    var Nom=document.getElementById("txtNom").value;
    cptNom=0;
    while(trouver==false && cptNom<=3)
    {
        if (tabJoueur[cptNom]==Nom)
        {
            trouver=true;
        }
        else
        {
            cptNom++;
        }
    }
    if(trouver==true)
    {
        document.getElementById("lblReponse").innerHTML=tabJoueur[cptNom]+" a obtenu un pointage de "+tabPoint[cptNom]+" points ";
    }
    else
    {
        document.getElementById("lblReponse").innerHTML="Aucun nom ne correspond ";
    }
}


function btnCalculer_onclick(){

    if (validerChampsObli()===true)
    {
        saisirInforamtion();
        choixToilettage();
        choixAnimaux();
        saisirNbrJrs();
        choixVeterinaire();
        calculerVariables();
        afficherInformations(cell,nom);
    }

}

function saisirInforamtion()
{
    ChoixVeterinaire = document.getElementById("lstVeterinaire").value;
    NbrJrs = parseFloat(document.getElementById("txtNbreJours").value);
    Heure = parseFloat(document.getElementById("txtHeure").value);
    nom= document.getElementById("txtNom").value;
    cell = document.getElementById("txtCell").value;
}
function choixToilettage()
{
    var CoutToilettage;
    if (document.getElementById("chkServ").checked == true) {
        CoutToilettage = 5;
        service = "avec";
    }
    else {
        CoutToilettage = 0;
        service = "sans";
    }
    return CoutToilettage;
}
function choixAnimaux()
{
    if (document.getElementById("radChien").checked == true) {
        total = 18.50;
        animaux="chien";

    }
    else {
        total = 16.95;
        animaux="chat";
    }
}
function saisirNbrJrs()
{

    if (1<=NbrJrs && NbrJrs<5)
    {
        rabais=1;
    }
    else if(5<=NbrJrs && NbrJrs<10)
    {
        rabais=0.95;
    }
    else if(10<=NbrJrs && NbrJrs<30)
    {
        rabais=0.90;
    }
    else if(30<=NbrJrs)
    {
        rabais=0.85;
    }

}
function choixVeterinaire()
{

    switch(ChoixVeterinaire)
    {
        case "Audrey Bouchard": tauxHoraire=25*Heure;
            break;
        case "Stéphane Tremblay": tauxHoraire=35*Heure;
            break;
        case "Maxime Simard": tauxHoraire=40*Heure;
            break;
        case "Mélissa Caron": tauxHoraire=45*Heure;
            break;
    }

}
function calculerVariables()
{
    Total=(((((total*NbrJrs)+CoutToilettage)*rabais)*1.14975)+tauxHoraire);
}
function afficherInformations(cell,nom)
{
    console.log("Le total es de "+ Total.toFixed(2)+"$" +" pour un nombre d'heure est de "+Heure +" avec le vétérinaire "+ ChoixVeterinaire + " avec un salaire de "+tauxHoraire+" pour "+NbrJrs+" jours "+" et "+service+" toilettage "+" pour un "+animaux );
    document.getElementById("lblMessage").innerHTML="Bonjour"+nom+"le total es de "+ Total.toFixed(2)+" $ " +" pour un nombre d'heure de "+Heure +" avec le vétérinaire "+ ChoixVeterinaire + " avec un salaire de"+tauxHoraire+" pour "+NbrJrs+" jours "+" et "+service+" toilettage "+" pour un "+animaux+" nous voous conctacterons à ce numéro "+cell;
}
function btnAfficher_onclick(){
    document.getElementById("img1").src= "img/Content.jpg";
}
function btnAfficher2_onclick(){
    document.getElementById("img2").src= "img/Rien.jpg";
}
function btnAfficher3_onclick(){
    document.getElementById("img3").src= "img/Triste.jpg";
}
function btnAfficher4_onclick(){
    document.getElementById("img4").src= "img/chien.jpg";
}
function btnAfficher5_onclick(){
    document.getElementById("img5").src= "img/chat.jpg";
}
function validerChampsObli()
{
    var tabnomId=new Array("lstVeterinaire","txtNbreJours","txtHeure","txtNom","txtCell");
    var valide=true;
    var i;
    for(i=0;i<tabnomId.length;i++)
    {
        if(valideExist(tabnomId[i])===false)
        {
            valide=false;
        }

    }
    return valide;
}
function valideExist(nomId)
{
    var valide =true;
    if (document.getElementById(nomId).value ==="")
    {
        valide=false;
        document.getElementById(nomId).style.backgroundColor="red";

    }
    else {
        valide=true;
        document.getElementById(nomId).style.backgroundColor="white";
    }
    return valide;
}
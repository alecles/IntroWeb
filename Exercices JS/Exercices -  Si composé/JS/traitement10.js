function btnCalculer_onclick()
{ 
 	var Age;
 	var Categorie;


 	Age = parseFloat(document.getElementById("txtAge").value);

    if (Age >= 6 && Age <= 8)
    {
        Categorie = "Poussin";
    }

    else if (Age >= 9 && Age <= 10)
    {
        Categorie = "Pupille";
    }

    else if (Age >= 11 && Age <= 12)
    {
        Categorie = "Minime";
    }

    else if (Age > 13)
    {
        Categorie = "Cadet";
    }


    console.log("Votre enfant est considéré comme un " +Categorie);

}
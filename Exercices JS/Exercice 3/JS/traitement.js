function btnCalculer_onclick()
{ 
 	var ArgentCAN;
    var TauxChange;
    var Euro;

    ArgentCAN = parseFloat(document.getElementById("ArgentCAN").value);
    TauxChange = parseFloat(document.getElementById("TauxChange").value);
    Euro = ArgentCAN * TauxChange;

    console.log("Le montant en Euro est de :" +Euro);


}





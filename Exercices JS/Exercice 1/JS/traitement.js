function btnCalculer_onclick()
{ 
 	var PoidsLivre;
    var Kg;


    PoidsLivre = parseFloat(document.getElementById("txtPoidsLivre").value);
    Kg = PoidsLivre / 2.2;

    console.log("Le poid en Kg est de: " +Kg);


}





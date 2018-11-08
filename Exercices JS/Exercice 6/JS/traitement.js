function btnCalculer_onclick()
{ 
 	var Nb1;
    var Nb5;
    var Nb10;
    var Nb25;
    var Total;

    Nb1 = parseFloat(document.getElementById("Nb1").value);
    Nb5 = parseFloat(document.getElementById("Nb5").value);
    Nb10 = parseFloat(document.getElementById("Nb10").value);
    Nb25 = parseFloat(document.getElementById("Nb25").value);
    Total = (Nb1 * 1) + (Nb5 *5) + (Nb10 * 10) + (Nb25 * 25);
    Total= Total/100;

    console.log(Total.toFixed(2));
    console.log("Le montant total est de :" +Total);


}





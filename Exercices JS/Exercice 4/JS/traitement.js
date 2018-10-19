function btnCalculer_onclick()
{ 
    var Destination
    var Distance;
    var Coût;
    var Consommation;
    var PrixL;

    Destination = (document.getElementById("Destination").value);
    Distance = parseFloat(document.getElementById("Distance").value);
    Consommation = parseFloat(document.getElementById("Consommation").value);
    PrixL = parseFloat(document.getElementById("PrixL").value);

    Coût = (Distance/100) * Consommation * PrixL;
    console.log(Coût.toFixed(2))
    console.log("Le coût de votre voyage est de :" +Coût+" pour aller à " +Destination);


}





function btnCalculer_onclick()
{ 
 	var MoyKmMois;
    var TotKm;


    MoyKmMois = parseFloat(document.getElementById("MoyKmMois").value);
    TotKm = MoyKmMois * 60;

    console.log("La distance en Km est de : " +TotKm);


}





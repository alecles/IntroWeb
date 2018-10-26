function btnCalculer_onclick() {
    var PrixBase;
    var Age;
    var Rabais;
    var Total;

    PrixBase = parseFloat(document.getElementById("txtBasePrix").value);
    Age = parseFloat(document.getElementById("txtAge").value);

    if (Age <= 16)
    {

    if (document.getElementById("radMidi").checked == true)
        {
        Rabais = 1.60;
        }

    else
        {
        Rabais = 1.40;
        }

    }

    else
    {

        if (document.getElementById("radMidi").checked == true)
        {
            Rabais = 1.30;
        }

        else
        {
            Rabais = 0;
        }

    }

    Total = PrixBase / Rabais;

    console.log(Total.toFixed(2));
    console.log("Le total est de: " +Total);



















    }



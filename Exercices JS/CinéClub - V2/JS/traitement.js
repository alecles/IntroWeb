function btnCalculer_onclick() {
    var PrixBase;
    var Age;
    var Rabais;
    var Total;
    var Heure;
    var MiSession;
    var Film;

    PrixBase = parseFloat(document.getElementById("txtBasePrix").value);
    Age = parseFloat(document.getElementById("txtAge").value);
    Film = document.getElementById("lstFilm").value;

    if (Age <= 16)
    {

    if (document.getElementById("radMidi").checked == true)
        {
        Rabais = 1.60;
        Heure = "Midi"
        }

    else
        {
        Rabais = 1.40;
        Heure = "Soir"
        }

        if (document.getElementById("MiSession").checked == true)
        {
            MiSession = 1.20;

        }

        else
        {
            MiSession = 1;
        }

    }

    else
    {

        if (document.getElementById("radMidi").checked == true)
        {
            Rabais = 1.30;
            Heure = "Midi"
        }

        else
        {
            Rabais = 1;
            Heure = "Soir"
        }

        if (document.getElementById("MiSession").checked == true)
        {
            MiSession = 1.20;
        }

        else
        {
            MiSession = 1;
        }
    }

    Total = PrixBase / Rabais;
    Total = Total / MiSession;

    console.log(Total.toFixed(2));
    console.log("Un billet du " +Heure+ " pour un spectateur de " +Age+ " coûte " +Total+ " $ pour le film " +Film+ ".");



















    }



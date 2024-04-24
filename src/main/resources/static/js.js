
function billettKjøp() {

    let filmNavn = document.getElementById("filmId").value;
    let feilFilm = document.getElementById("feilInnputFilm");
    let antall = document.getElementById("innAntall").value;
    let feilAntall = document.getElementById("feilInnputAntall");
    let fornavn = document.getElementById("innFornavn").value;
    let feilFornavn = document.getElementById("feilInputFornavn");
    let etternavn = document.getElementById("innEtternavn").value;
    let feilEtternavn = document.getElementById("feilInputEtternavn");
    let telefonnr = document.getElementById("innTelefonnr").value;
    let feilTelefonnr = document.getElementById("feilInputTelefonnr");
    let epost = document.getElementById("innEpost").value;
    let feilEpost = document.getElementById("feilInputEpost");

    let gyldig = filmNavn.selectedIndex !== 0 && /^\d+$/.test(antall) &&
        /^[a-zA-Z]+$/.test(fornavn) && /^[a-zA-Z]+$/.test(etternavn)
        && /^\d{8,10}$/.test(telefonnr) && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(epost);

    if (!gyldig)
    {
        document.getElementById("feilInnputFilm").innerText = "Velg en film"
        document.getElementById("feilInnputAntall").innerText = "Skriv inn antallet"
        document.getElementById("feilInputFornavn").innerText = "Skriv inn fornavnet ditt som bokstaver"
        document.getElementById("feilInputEtternavn").innerText = "Skriv inn etternavnet ditt som bokstaver"
        document.getElementById("feilInputTelefonnr").innerText = "Skriv inn telefonnummeret ditt på mellom 8 og 10 sifre"
        document.getElementById("feilInputEpost").innerText = "Skriv inn en gyldig e-post"

    }

    else {
        feilFilm.innerText="";
        feilAntall.innerText=""
        feilFornavn.innerText="";
        feilEtternavn.innerText="";
        feilTelefonnr.innerText="";
        feilEpost.innerText="";

        const filmInformasjon = {
            filmNavn: filmNavn,
            antall: antall,
            fornavn: fornavn,
            etternavn: etternavn,
            telefonnr: telefonnr,
            epost: epost
        }

        $.post("/lagre", filmInformasjon, function () {
            hentBillett()
            document.getElementById("formId").reset();
        })

    }

}

function hentBillett() {
    let utSkfirt = "";
    $.get("/hentAlle", function (data) {
        for (let ut of data) {
            utSkfirt += "<tr><td>" + ut.filmNavn + "</td>" + "<td>" + ut.antall + "</td>" +
                "<td>" + ut.fornavn + "</td>" + "<td>" + ut.etternavn + "</td>" +
                "<td>" + ut.telefonnr + "</td>" + "<td>" + ut.epost + "</td><tr/>";

        }
        $("#valgtFilm").html(utSkfirt);
    })}

function slettFilm() {
    $.get("/slettAlle", function () {
        hentBillett()
    })
}






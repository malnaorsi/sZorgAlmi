
//3. feladat

const Dolgozok = [{
    nev: "Koaxk Ábel",
    eletkor: 23,
    fizetes: 400000,
    beosztas: "Rendszergazda"
},
{
    nev: "Zsíros B. Ödön",
    eletkor: 45,
    fizetes: 1200000,
    beosztas: "Ügyvezető Igazgató"
},
{
    nev: "Meg Győző",
    eletkor: 32,
    fizetes: 600000,
    beosztas: "Marketing Manager"
},
{
    nev: "Békés Csaba",
    eletkor: 63,
    fizetes: 180000,
    beosztas: "Takarító"
},
{
    nev: "Pofá Zoltán",
    eletkor: 25,
    fizetes: 300000,
    beosztas: "Biztonsági Őr"
},
{
    nev: "Fejet Lenke",
    eletkor: 22,
    fizetes: 220000,
    beosztas: "Irodai Titkár"
},
{
    nev: "Vak Cina",
    eletkor: 30,
    fizetes: 500000,
    beosztas: "Üzem Orvos"
}
]

function CegAtlagEletkor(vizsgaltTomb) {
    if (!Array.isArray(vizsgaltTomb) || vizsgaltTomb.length === 0) {
    }

    let osszEletkor = 0;
    let dolgozokSzama = 0;

    for (let i = 0; i < vizsgaltTomb.length; i++) {
        if (typeof vizsgaltTomb[i].eletkor === "number" && vizsgaltTomb[i].eletkor > 0) {
            osszEletkor += vizsgaltTomb[i].eletkor;
            dolgozokSzama++;
        }
    }

    if (dolgozokSzama === 0) {
        return "Hiba: Nincs érvényes életkorral rendelkező dolgozó!";
    }

    return Math.round(osszEletkor / dolgozokSzama);
}

function CegAtlagEletkorKiir(kiirandoEredmeny) {
    console.log("A dolgozók átlag életkora: " + kiirandoEredmeny);
}

CegAtlagEletkorKiir(CegAtlagEletkor(Dolgozok));
interface Product {
    type: string; // Artikeltyp
    name: string; // Artikelname
    logo: string; // Bildname (Mit File Extension)
    alt: string; // Alt. Bilname
    desc: string;  //Artikelbeschreibung
    price: string; //Artikelpreis

}

let product: Product[] = [];

//Koks
addProduct({
    type: "koks", name: "Koks", logo: "K1.jpg", alt: "Koks", desc: "Heizt dir das Gefühl aus dem Gesicht", price: "100€"
});
addProduct({
    type: "koks", name: "Koks", logo: "K2.jpg", alt: "Koks", desc: "Spezialmaterial", price: "100.000€"
});
addProduct({
    type: "koks", name: "Koks", logo: "K3.jpg", alt: "Koks", desc: "1A Qualität", price: "10.000€"
});
addProduct({
    type: "koks", name: "Koks", logo: "K4.jpg", alt: "Koks", desc: "Koks, exklusive Schaufel", price: "1€"
});
addProduct({
    type: "koks", name: "Koks", logo: "K5.jpg", alt: "Koks", desc: "Rekordkoks", price: "1.000€"
});
addProduct({
    type: "koks", name: "Koks", logo: "K6.jpg", alt: "Koks", desc: "Baba Shishakoks, vallah", price: "10€"
});

//Nutten
addProduct({
    type: "nutte", name: "Natasha, 26", logo: "N1.jpg", alt: "Natasha", desc: "20 Jahre Erfahrung", price: "100€"
});
addProduct({
    type: "nutte", name: "Natalia, 26", logo: "N2.jpg", alt: "Natalia", desc: "18 Jahre Erfahrung", price: "150€"
});
addProduct({
    type: "nutte", name: "Gerda, 44", logo: "N3.jpg", alt: "Gerda", desc: "A.k.a.: Tonardozunge", price: "200€"
});
addProduct({
    type: "nutte", name: "Shaniqua, 30", logo: "N4.jpg", alt: "Shaniqua", desc: "Jung, brutal, gut aussehend.", price: "400€"
});
addProduct({
    type: "nutte", name: "Heidrun, Gerlinde & Peggy", logo: "N5.jpg", alt: "", desc: "3 Engel für Herpes", price: "10.000€"
});
addProduct({
    type: "nutte", name: "Mrs.Philips, 66", logo: "N6.jpg", alt: "Mrs.Philips", desc: "Das beste, was Trevor Philips Enterprises zu bieten hat.", price: "1.000.000€"
});






// Sobald die HTML Page geladen hat:
document.addEventListener("DOMContentLoaded", function (event) {
    var countKoks = 0;
    var countNutten = 0;

    for (let i of product) {

        countKoks++;

        if (i.type == "koks") {

            let div: HTMLElement = document.createElement("div");
            div.setAttribute("id", "koks" + countKoks);

            let img: HTMLElement = document.createElement("img");
            img.setAttribute("src", i.logo);
            img.setAttribute("alt", i.alt);
            div.appendChild(img);

            let h2: HTMLElement = document.createElement("h2");
            let h2text = document.createTextNode(i.name);
            h2.appendChild(h2text);

            let p: HTMLElement = document.createElement("p");
            let ptext = document.createTextNode(i.desc);
            p.appendChild(ptext);

            let p2: HTMLElement = document.createElement("p");
            p2.setAttribute("class", "Preis");
            let p2text = document.createTextNode(i.price);
            p2.appendChild(p2text);

            let input: HTMLElement = document.createElement("input");
            input.setAttribute("type", "submit");
            input.setAttribute("value", "In den Warenkorb");


        }

    



        countNutten++;

        if (i.type == "nutte") {

            let div: HTMLElement = document.createElement("div");
            div.setAttribute("id", "nutten" + countNutten);

            let img: HTMLElement = document.createElement("img");
            img.setAttribute("src", i.logo);
            img.setAttribute("alt", i.alt);

            let h2: HTMLElement = document.createElement("h2");
            let h2text = document.createTextNode(i.name);
            h2.appendChild(h2text);

            let p: HTMLElement = document.createElement("p");
            var ptext = document.createTextNode(i.desc);
            p.appendChild(ptext);

            let p2: HTMLElement = document.createElement("p");
            p2.setAttribute("class", "Preis");
            var p2text = document.createTextNode(i.price);
            p2.appendChild(p2text);

            let input: HTMLElement = document.createElement("input");
            input.setAttribute("type", "submit");
            input.setAttribute("value", "In die Kiste");
        }
   
    }

});
"use strict";
let products = [];
function addProduct(p) {
    products.push(p);
}
//Products
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
    for (let i of products) {
        countKoks++;
        if (i.type == "koks") {
            var div = document.createElement("div");
            div.setAttribute("id", "koks" + countKoks);
            document.getElementById("koks").appendChild(div);
            var img = document.createElement("img");
            img.setAttribute("src", i.logo);
            img.setAttribute("alt", i.alt);
            document.getElementById("koks" + countKoks).appendChild(img);
            var h2 = document.createElement("h2");
            var h2text = document.createTextNode(i.name);
            h2.appendChild(h2text);
            document.getElementById("koks" + countKoks).appendChild(h2);
            var p = document.createElement("p");
            var ptext = document.createTextNode(i.desc);
            p.appendChild(ptext);
            document.getElementById("koks" + countKoks).appendChild(p);
            var p2 = document.createElement("p");
            p2.setAttribute("class", "Preis");
            var p2text = document.createTextNode(i.price);
            p2.appendChild(p2text);
            document.getElementById("koks" + countKoks).appendChild(p2);
            var input = document.createElement("input");
            input.setAttribute("type", "submit");
            input.setAttribute("value", "In den Warenkorb");
            document.getElementById("koks" + countKoks).appendChild(input);
        }
        countNutten++;
        if (i.type == "nutte") {
            var div = document.createElement("div");
            div.setAttribute("id", "nutten" + countNutten);
            document.getElementById("nutten").appendChild(div);
            var img = document.createElement("img");
            img.setAttribute("src", i.logo);
            img.setAttribute("alt", i.alt);
            document.getElementById("nutten" + countNutten).appendChild(img);
            var h2 = document.createElement("h2");
            var h2text = document.createTextNode(i.name);
            h2.appendChild(h2text);
            document.getElementById("nutten" + countNutten).appendChild(h2);
            var p = document.createElement("p");
            var ptext = document.createTextNode(i.desc);
            p.appendChild(ptext);
            document.getElementById("nutten" + countNutten).appendChild(p);
            var p2 = document.createElement("p");
            p2.setAttribute("class", "Preis");
            var p2text = document.createTextNode(i.price);
            p2.appendChild(p2text);
            document.getElementById("nutten" + countNutten).appendChild(p2);
            var input = document.createElement("input");
            input.setAttribute("type", "submit");
            input.setAttribute("value", "In die Kiste");
            document.getElementById("nutten" + countNutten).appendChild(input);
        }
    }
});
//# sourceMappingURL=script.js.map
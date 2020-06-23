"use strict";
var Aufgabe07;
(function (Aufgabe07) {
    let artikelSumme = 0;
    let produktCounter = 0;
    let cartDiv = document.createElement("div");
    cartDiv.id = "cart_count";
    let count = 0;
    let cartProdukte = [];
    function addtoCart(_event) {
        if (produktCounter >= 0) {
            document.getElementById("cart_count")?.appendChild(cartDiv);
        }
        produktCounter += 1;
        cartDiv.innerHTML = produktCounter + "";
        artikelSumme += parseInt(_event.currentTarget?.getAttribute("preis"));
        localStorage.setItem("summe", artikelSumme.toString());
        if (_event.currentTarget?.getAttribute("price")) {
            artikelSumme = count + parseInt(_event.currentTarget?.getAttribute("price"));
            count = artikelSumme;
        }
        console.log(artikelSumme.toFixed(0));
        let indexButton = _event.currentTarget.parentElement.getAttribute("index");
        let indexNr = parseInt(indexButton);
        cartProdukte.push(Aufgabe07.produkte[indexNr]);
        localStorage.setItem("artikel_bild" + (cartProdukte.length - 1), Aufgabe07.produkte[indexNr].img);
        localStorage.setItem("artikel_name" + (cartProdukte.length - 1), Aufgabe07.produkte[indexNr].name);
        localStorage.setItem("artikel_description" + (cartProdukte.length - 1), Aufgabe07.produkte[indexNr].description);
        localStorage.setItem("artikel_preis" + (cartProdukte.length - 1), Aufgabe07.produkte[indexNr].preis.toString());
        localStorage.setItem("anzahlArtikel", cartProdukte.length.toString());
    }
    Aufgabe07.addtoCart = addtoCart;
    var display = 0; // 0 = alle Artikel, 1 = Koks, 2 = Nutten
    function sortKoks(e) {
        var hideDiv = document.getElementById("nutten");
        var showDiv = document.getElementById("koks");
        hideDiv.style.visibility = "hidden";
        hideDiv.style.display = "none";
        showDiv.style.visibility = "visible";
        showDiv.style.display = "flex";
    }
    function sortNutten(e) {
        var hideDiv = document.getElementById("koks");
        var showDiv = document.getElementById("nutten");
        hideDiv.style.visibility = "hidden";
        hideDiv.style.display = "none";
        showDiv.style.visibility = "visible";
        showDiv.style.display = "flex";
    }
    function createArtikel() {
        var countKoks = 0;
        var countNutten = 0;
        for (let i of Aufgabe07.produkte) {
            countKoks++;
            if (i.category == "1") {
                var div = document.createElement("div");
                div.setAttribute("id", "koks" + countKoks);
                div.setAttribute("index", countKoks);
                document.getElementById("koks").appendChild(div);
                var img = document.createElement("img");
                img.setAttribute("src", i.img);
                img.setAttribute("alt", i.alt);
                document.getElementById("koks" + countKoks).appendChild(img);
                var h2 = document.createElement("h2");
                var h2text = document.createTextNode(i.name);
                h2.appendChild(h2text);
                document.getElementById("koks" + countKoks).appendChild(h2);
                var p = document.createElement("p");
                var ptext = document.createTextNode(i.description);
                p.appendChild(ptext);
                document.getElementById("koks" + countKoks).appendChild(p);
                var p2 = document.createElement("p");
                p2.setAttribute("class", "Preis");
                var p2text = document.createTextNode(i.preis + "€");
                p2.appendChild(p2text);
                document.getElementById("koks" + countKoks).appendChild(p2);
                var input = document.createElement("input");
                input.setAttribute("type", "submit");
                input.setAttribute("value", "In den Warenkorb");
                input.addEventListener("click", addtoCart);
                input.setAttribute("elementID", "koks" + countKoks);
                input.setAttribute("price", i.preis);
                input.setAttribute("index", countKoks);
                document.getElementById("koks" + countKoks).appendChild(input);
            }
            countNutten++;
            if (i.category == "2") {
                var div = document.createElement("div");
                div.setAttribute("id", "nutten" + countNutten);
                document.getElementById("nutten").appendChild(div);
                var img = document.createElement("img");
                img.setAttribute("src", i.img);
                img.setAttribute("alt", i.alt);
                document.getElementById("nutten" + countNutten).appendChild(img);
                var h2 = document.createElement("h2");
                var h2text = document.createTextNode(i.name);
                h2.appendChild(h2text);
                document.getElementById("nutten" + countNutten).appendChild(h2);
                var p = document.createElement("p");
                var ptext = document.createTextNode(i.description);
                p.appendChild(ptext);
                document.getElementById("nutten" + countNutten).appendChild(p);
                var p2 = document.createElement("p");
                p2.setAttribute("class", "Preis");
                var p2text = document.createTextNode(i.preis + "€");
                p2.appendChild(p2text);
                document.getElementById("nutten" + countNutten).appendChild(p2);
                var input = document.createElement("input");
                input.setAttribute("type", "submit");
                input.setAttribute("value", "In die Kiste");
                input.setAttribute("elementID", "nutten" + countNutten);
                input.setAttribute("price", i.preis);
                input.addEventListener("click", addtoCart);
                input.setAttribute("index", countNutten);
                document.getElementById("nutten" + countNutten).appendChild(input);
            }
            var koksButton = document.getElementById("sortKoks");
            koksButton.addEventListener("click", sortKoks);
            var nuttenButton = document.getElementById("sortNutten");
            nuttenButton.addEventListener("click", sortNutten);
        }
    }
    Aufgabe07.createArtikel = createArtikel;
})(Aufgabe07 || (Aufgabe07 = {}));
//# sourceMappingURL=script.js.map
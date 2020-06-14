export interface Product {
    type: string; // Artikeltyp
    name: string; // Artikelname
    logo: string; // Bildname (Mit File Extension)
    alt: string; // Alt. Bilname
    desc: string;  //Artikelbeschreibung
    price: number; //Artikelpreis
    category: number; //Kategorie
}

let products: Product[] = [];

function addProduct(p: Product): void {

    products.push(p);

}


var totalSum = 0;
var totalProducts = 0;

function addToBasket(e) {

    var target = e.target;

    totalProducts++;
    totalSum = +totalSum + +target.getAttribute("price");
    document.getElementById("nop").innerHTML = totalProducts;



    console.log("Artikel im Warenkorb: " + totalProducts);
    console.log("Wert der Artikel im Warenkorb: " + totalSum);


}

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
            var p2text = document.createTextNode(i.price + "€");
            p2.appendChild(p2text);
            document.getElementById("koks" + countKoks).appendChild(p2);

            var input = document.createElement("input");
            input.setAttribute("type", "submit");
            input.setAttribute("value", "In den Warenkorb");
            input.addEventListener("click", addToBasket);
            input.setAttribute("elementID", "koks" + countKoks);
            input.setAttribute("price", i.price);

            document.getElementById("koks" + countKoks).appendChild(input);



        }

        countNutten++;

        if (i.type == "nutten") {


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
            var p2text = document.createTextNode(i.price + "€");
            p2.appendChild(p2text);
            document.getElementById("nutten" + countNutten).appendChild(p2);

            var input = document.createElement("input");
            input.setAttribute("type", "submit");
            input.setAttribute("value", "In die Kiste");
            input.setAttribute("elementID", "nutten" + countNutten);
            input.setAttribute("price", i.price);
            input.addEventListener("click", addToBasket);

            document.getElementById("nutten" + countNutten).appendChild(input);

        }

        var koksButton = document.getElementById("sortKoks");
        koksButton.addEventListener("click", sortKoks);

        var nuttenButton = document.getElementById("sortNutten");
        nuttenButton.addEventListener("click", sortNutten);







    }








});



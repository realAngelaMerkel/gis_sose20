namespace Aufgabe07 {
    export interface Product {
        type: string; // Artikeltyp
        name: string; // Artikelname
        logo: string; // Bildname (Mit File Extension)
        alt: string; // Alt. Bilname
        desc: string;  //Artikelbeschreibung
        price: number; //Artikelpreis
        category: number; //Kategorie
    }

 
    let artikelSumme: number = 0;
    let produktCounter: number = 0;
    let cartDiv: HTMLDivElement = document.createElement("div");
    cartDiv.id = "cart_count";
    let count: number = 0;

    let cartProdukte: Product[] = [];

    export function addtoCart(_event: Event): void {

        if (produktCounter >= 0) {
            document.getElementById("cart_count") ?.appendChild(cartDiv);
        }

        produktCounter += 0;
        cartDiv.innerHTML = produktCounter + "";

        artikelSumme += parseInt((<HTMLElement>_event.currentTarget) ?.getAttribute("preis")!);

        localStorage.setItem("summe", artikelSumme.toString());


        if ((<HTMLButtonElement>_event.currentTarget) ?.getAttribute("price")) {
            artikelSumme = count + parseInt((<HTMLButtonElement>_event.currentTarget) ?.getAttribute("price")!);
            count = artikelSumme;
        }
        console.log(artikelSumme.toFixed(0));

        let indexButton: string = (<HTMLDivElement>(<HTMLElement>_event.currentTarget).parentElement).getAttribute("index")!;
        let indexNr: number = parseInt(indexButton);

        cartProdukte.push(produkte[indexNr]);
        localStorage.setItem("artikel_bild" + (cartProdukte.length - 1), produkte[indexNr].img);
        localStorage.setItem("artikel_name" + (cartProdukte.length - 1), produkte[indexNr].name);
        localStorage.setItem("artikel_description" + (cartProdukte.length - 1), produkte[indexNr].description);
        localStorage.setItem("artikel_preis" + (cartProdukte.length - 1), produkte[indexNr].preis.toString());
        localStorage.setItem("anzahlArtikel", cartProdukte.length.toString());

       

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




    export function createArtikel(): void {

        var countProduct = 0;



        for (let i of produkte) {




            if (i.category == "1") {

                var div = document.createElement("div");
                div.setAttribute("id", "koks" + countProduct);
                div.setAttribute("index", countProduct);

                document.getElementById("koks").appendChild(div);

                var img = document.createElement("img");
                img.setAttribute("src", i.img);
                img.setAttribute("alt", i.alt);
                document.getElementById("koks" + countProduct).appendChild(img);



                var h2 = document.createElement("h2");
                var h2text = document.createTextNode(i.name);
                h2.appendChild(h2text);
                document.getElementById("koks" + countProduct).appendChild(h2);

                var p = document.createElement("p");
                var ptext = document.createTextNode(i.description);
                p.appendChild(ptext);
                document.getElementById("koks" + countProduct).appendChild(p);

                var p2 = document.createElement("p");
                p2.setAttribute("class", "Preis");
                var p2text = document.createTextNode(i.preis + "€");
                p2.appendChild(p2text);
                document.getElementById("koks" + countProduct).appendChild(p2);

                var input = document.createElement("input");
                input.setAttribute("type", "submit");
                input.setAttribute("value", "In den Warenkorb");
                input.addEventListener("click", addtoCart);
                input.setAttribute("elementID", "koks" + countProduct);
                input.setAttribute("price", i.preis);
                input.setAttribute("index", countProduct);

                document.getElementById("koks" + countProduct).appendChild(input);



            }




            if (i.category == "2") {


                var div = document.createElement("div");
                div.setAttribute("id", "nutten" + countProduct);
                div.setAttribute("index", countProduct);

                document.getElementById("nutten").appendChild(div);

                var img = document.createElement("img");
                img.setAttribute("src", i.img);
                img.setAttribute("alt", i.alt);
                document.getElementById("nutten" + countProduct).appendChild(img);

                var h2 = document.createElement("h2");
                var h2text = document.createTextNode(i.name);
                h2.appendChild(h2text);
                document.getElementById("nutten" + countProduct).appendChild(h2);

                var p = document.createElement("p");
                var ptext = document.createTextNode(i.description);
                p.appendChild(ptext);
                document.getElementById("nutten" + countProduct).appendChild(p);

                var p2 = document.createElement("p");
                p2.setAttribute("class", "Preis");
                var p2text = document.createTextNode(i.preis + "€");
                p2.appendChild(p2text);
                document.getElementById("nutten" + countProduct).appendChild(p2);

                var input = document.createElement("input");
                input.setAttribute("type", "submit");
                input.setAttribute("value", "In die Kiste");
                input.setAttribute("elementID", "nutten" + countProduct);
                input.setAttribute("price", i.preis);
                input.addEventListener("click", addtoCart);
                input.setAttribute("index", countProduct);
                document.getElementById("nutten" + countProduct).appendChild(input);

            }



            var koksButton = document.getElementById("sortKoks");
            koksButton.addEventListener("click", sortKoks);

            var nuttenButton = document.getElementById("sortNutten");
            nuttenButton.addEventListener("click", sortNutten);



            countProduct++;



        }





    }



}

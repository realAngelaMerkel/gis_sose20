
//Interface Koks
interface ArtikelKoks {
    img: string;
    name: string;
    description: string;
    preis: string;
}

//Artikel Koks
let artikel1: ArtikelKoks = { img: "K1.jpg", name: "Koks", description: "Heizt so gut, dass dein Gesicht taub wird!", preis: "100" };
let artikel2: ArtikelKoks = { img: "K2.jpg", name: "Koks", description: "Spezialmaterial", preis: "100.000€" };
let artikel3: ArtikelKoks = { img: "K3.jpg", name: "Koks", description: "1A Qualität", preis: "10.000€" };
let artikel4: ArtikelKoks = { img: "K4.jpg", name: "Koks", description: "Koks, exclusive Schaufel", preis: "1" };
let artikel5: ArtikelKoks = { img: "K5.jpg", name: "Koks", description: "Rekordkoks", preis: "1.000€" };
let artikel6: ArtikelKoks = { img: "K6.jpg", name: "Koks", description: "Baba Shishakoks, vallah", preis: "10€" };


//Artikel Koks Array
let artikelKoks: ArtikelKoks[] = [artikel1, artikel2, artikel3, artikel4, artikel5, artikel6];

//Interface Nutten
interface ArtikelNutten {
    img: string;
    name: string;
    description: string;
    preis: string;
}

//Artikel Nutten
let artikel7: ArtikelNutten = { img: "N1.jpg", name: "Natasha, 26", description: "20 Jahre Erfahrung", preis: "100€" };
let artikel8: ArtikelNutten = { img: "N2.jpg", name: "Natalia, 26", description: "18 Jahre Erfahrung", preis: "150€" };
let artikel9: ArtikelNutten = { img: "N3.jpg", name: "Gerda, 44", description: "A.k.a.: Tornardozunge", preis: "200€" };
let artikel10: ArtikelNutten = { img: "N4.jpg", name: "Shaniqua, 30", description: "Jung, brutal, gut aussehend", preis: "400€" };
let artikel11: ArtikelNutten = { img: "N5.jpg", name: "Heidrun, Gerlinde & Peggy ", description: "3 Engel für Herpes", preis: "10.000" };
let artikel12: ArtikelNutten = { img: "N6.jpg", name: "Mrs. Philips, 66", description: "Das beste, was Trevor Philips Enterprises zu bieten hat.", preis: "1.000.000€" };

//Artikel Nutten Array
let artikelNutten: ArtikelNutten[] = [artikel7, artikel8, artikel9, artikel10, artikel11, artikel12];

//Koks
for (let index: number = 0; index < artikelKoks.length; index++) {
    //DIV
    let newDiv: HTMLDivElement = document.createElement("div");
    newDiv.id = "div1" + index;
    document.getElementById("babaKoks")?.appendChild(newDiv);

    //IMG
    let imgElement: HTMLImageElement = document.createElement("img");
    imgElement.src = artikelKoks[index].img;
    document.getElementById("div1" + index)?.appendChild(imgElement);

    //NAME
    let name: HTMLParagraphElement = document.createElement("p");
    name.innerHTML = artikelKoks[index].name;
    document.getElementById("div1" + index)?.appendChild(name);

    //DESCRIPTION
    let description: HTMLParagraphElement = document.createElement("p");
    description.innerHTML = artikelKoks[index].description;
    document.getElementById("div1" + index)?.appendChild(description);

    //PREIS
    let price: HTMLParagraphElement = document.createElement("p");
    price.innerHTML = artikelKoks[index].preis;
    document.getElementById("div1" + index)?.appendChild(price);

    //BUY
    let kaufen: HTMLButtonElement = document.createElement("button");
    kaufen.innerHTML = "In die Nase";
    document.getElementById("div1" + index)?.appendChild(kaufen);
}

//Nutten
for (let index: number = 0; index < artikelNutten.length; index++) {
    //DIV
    let newDiv: HTMLDivElement = document.createElement("div");
    newDiv.id = "div2" + index;
    document.getElementById("Kahis")?.appendChild(newDiv);

    //IMG
    let imgElement: HTMLImageElement = document.createElement("img");
    imgElement.src = artikelNutten[index].img;
    document.getElementById("div2" + index)?.appendChild(imgElement);

    //NAME
    let name: HTMLParagraphElement = document.createElement("p");
    name.innerHTML = artikelNutten[index].name;
    document.getElementById("div2" + index)?.appendChild(name);

    //DESCRIPTION
    let description: HTMLParagraphElement = document.createElement("p");
    description.innerHTML = artikelNutten[index].description;
    document.getElementById("div2" + index)?.appendChild(description);

    //PREIS
    let price: HTMLParagraphElement = document.createElement("p");
    price.innerHTML = artikelNutten[index].preis;
    document.getElementById("div2" + index)?.appendChild(price);

    //BUY
    let kaufen: HTMLButtonElement = document.createElement("button");
    kaufen.innerHTML = "In die Kiste";
    document.getElementById("div2" + index)?.appendChild(kaufen);
}
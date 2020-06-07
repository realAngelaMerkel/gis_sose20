namespace script {
//Interface Produkte
export interface Product {
    img: string;
    name: string;
    description: string;
    preis: string;
}
//Artikel Koks
export let cokaProducts: Array<Product> = [
    {
        img: "K1.jpg", 
        name: "Koks", 
        description: "Heizt so gut, dass dein Gesicht taub wird!",
        preis: "100€"
    },
    {
        img: "K2.jpg", 
        name: "Koks",
        description: "Spezialmaterial",
        preis: "100.000€" 
    },
    {
        img: "K3.jpg",
        name: "Koks",
        description: "1A Qualität",
        preis: "10.000€"
    },
    {
        img: "K4.jpg",
        name: "Koks",
        description: "Koks, exclusive Schaufel",
        preis: "1€"
    },
    { 
        img: "K5.jpg",
        name: "Koks",
        description: "Rekordkoks",
        preis: "1.000€"
    },
    { 
        img: "K6.jpg",
        name: "Koks",
        description: "Baba Shishakoks, vallah",
        preis: "10€"
    }
];

//Artikel Nutten
export let kahiProducts: Array<Product> = [ 
    { img: "N1.jpg", name: "Natasha, 26", description: "20 Jahre Erfahrung", preis: "100€" },
    { img: "N2.jpg", name: "Natalia, 26", description: "18 Jahre Erfahrung", preis: "150€" },
    { img: "N3.jpg", name: "Gerda, 44", description: "A.k.a.: Tornardozunge", preis: "200€" },
    { img: "N4.jpg", name: "Shaniqua, 30", description: "Jung, brutal, gut aussehend", preis: "400€" },
    { img: "N5.jpg", name: "Heidrun, Gerlinde & Peggy ", description: "3 Engel für Herpes", preis: "10.000€" },
    { img: "N6.jpg", name: "Mrs. Philips, 66", description: "Das beste, was Trevor Philips Enterprises zu bieten hat.", preis: "1.000.000€" }
];
}
namespace Aufgabe07 {
    export interface Artikel {
        img: string;
        name: string;
        description: string;
        preis: number;
        category: number;
    }

    export let produkte: Artikel[];
    loadArtikel("./data.json");


    async function loadArtikel(_url: RequestInfo): Promise<void> {
        let response: Response = await fetch(_url);
        let jsonArray: JSON = await response.json();
        produkte = await JSON.parse(JSON.stringify(jsonArray));
        createArtikel();
    }

}
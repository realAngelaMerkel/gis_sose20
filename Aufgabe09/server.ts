import * as Http from "http";
import * as Url from "url";

export namespace A09Server {
    //Konsolen Ausgabe
    console.log("Starting server");
    //Vaiablen definition port mit dem Process Port 
    let port: number = Number(process.env.PORT);
    //Überprüft den Wert des Port, wenn Port keinen Wert hat wird ein standard Port zugewiesen
    if (!port)
        port = 8100;
    
    //Variable des Servers wird definiert und ein neuer Server wird dieser zugewiesen
    let server: Http.Server = Http.createServer();
    //Der server setzt einen Listener "request" und führt handleRequest aus
    server.addListener("request", handleRequest);
    //Der server setzt einen Listener "listening" und führt handleRequest aus
    server.addListener("listening", handleListen);
    //Server hört auf den zuvor definierten Port
    server.listen(port);

    //Bei Methodenaufruf wird "Listening" in der Console ausgegeben
    function handleListen(): void {
        console.log("Listening");
    }

    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
        //Consolenausgabe "I hear voices!" bei eingehender Request
        console.log("I hear voices!");

        //Definiert den Header der HTTP Request
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");


        if (_request.url) {
            let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
            let pfad: string | null = url.pathname;
            if (pfad == "/html") {
              for (let key in url.query) {
                _response.write(key + ": " + url.query[key] + "<br/>");
              }
            }
            else if (pfad == "/json") {
              let jsonAusgabe: string = JSON.stringify(url.query);
              _response.write(jsonAusgabe);
            }
          }
        //Beendet die Request
        _response.end();
    }
}
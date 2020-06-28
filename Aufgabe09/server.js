"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.A09Server = void 0;
const Http = require("http");
const Url = require("url");
var A09Server;
(function (A09Server) {
    //Konsolen Ausgabe
    console.log("Starting server");
    //Vaiablen definition port mit dem Process Port 
    let port = Number(process.env.PORT);
    //Überprüft den Wert des Port, wenn Port keinen Wert hat wird ein standard Port zugewiesen
    if (!port)
        port = 8100;
    //Variable des Servers wird definiert und ein neuer Server wird dieser zugewiesen
    let server = Http.createServer();
    //Der server setzt einen Listener "request" und führt handleRequest aus
    server.addListener("request", handleRequest);
    //Der server setzt einen Listener "listening" und führt handleRequest aus
    server.addListener("listening", handleListen);
    //Server hört auf den zuvor definierten Port
    server.listen(port);
    //Bei Methodenaufruf wird "Listening" in der Console ausgegeben
    function handleListen() {
        console.log("Listening");
    }
    function handleRequest(_request, _response) {
        //Consolenausgabe "I hear voices!" bei eingehender Request
        console.log("I hear voices!");
        //Definiert den Header der HTTP Request
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            let pfad = url.pathname;
            if (pfad == "/html") {
                for (let key in url.query) {
                    _response.write(key + ": " + url.query[key] + "<br/>");
                }
            }
            else if (pfad == "/json") {
                let jsonAusgabe = JSON.stringify(url.query);
                _response.write(jsonAusgabe);
            }
        }
        //Beendet die Request
        _response.end();
    }
})(A09Server = exports.A09Server || (exports.A09Server = {}));
//# sourceMappingURL=server.js.map
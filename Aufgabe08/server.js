"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.A08Server = void 0;
const Http = require("http");
var A08Server;
(function (A08Server) {
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
        //schreibt die request url 
        _response.write(_request.url);
        console.log(_request.url);
        //Beendet die Request
        _response.end();
    }
})(A08Server = exports.A08Server || (exports.A08Server = {}));
//# sourceMappingURL=server.js.map
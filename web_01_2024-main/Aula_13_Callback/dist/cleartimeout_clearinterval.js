"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testClearInterval = exports.testClearTimeout = void 0;
function testClearTimeout() {
    let frase = "Executando o comando.";
    let timeout = setTimeout(function () {
        console.log("Rodando o setTimeout");
    }, 2000);
    frase = "Rodando o clearTimeout";
    if (frase != "Executando o comando.") {
        clearTimeout(timeout);
        console.log(frase);
    }
}
exports.testClearTimeout = testClearTimeout;
function testClearInterval() {
    let contador = 0;
    const interval = setInterval(f => {
        contador++;
        console.log("Rodando o setInterval");
        if (contador == 3) {
            clearInterval(interval);
        }
    }, 500);
    setTimeout(function () {
        console.log("Intervalo cancelado após 3 execuções.");
    }, 2000);
}
exports.testClearInterval = testClearInterval;

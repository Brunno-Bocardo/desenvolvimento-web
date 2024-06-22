"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.somar = exports.concatenar = exports.imprimir = void 0;
function imprimir(value) {
    console.log("A operação efetuada resultou em: " + value);
}
exports.imprimir = imprimir;
function concatenar(a, b, callback) {
    var op = a + " " + b;
    callback(op);
}
exports.concatenar = concatenar;
function somar(a, b, callback) {
    var op = a + b;
    callback(op);
}
exports.somar = somar;

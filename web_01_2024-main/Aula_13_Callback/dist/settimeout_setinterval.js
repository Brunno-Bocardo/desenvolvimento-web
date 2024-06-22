"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testInterval = exports.testTimeout = void 0;
function exibeText() {
    console.log("Executando o comando.");
}
function testTimeout() {
    console.log("Antes do setTimeout.");
    setTimeout(exibeText, 2000);
    console.log("Depois do setTimeout");
}
exports.testTimeout = testTimeout;
function testInterval() {
    console.log("Antes do setInterval.");
    setInterval(exibeText, 3000);
    console.log("Depois do setInterval.");
}
exports.testInterval = testInterval;

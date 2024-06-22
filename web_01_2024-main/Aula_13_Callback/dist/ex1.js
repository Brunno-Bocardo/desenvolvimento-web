"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exibe = exports.reverterString = void 0;
function reverterString(string, callback) {
    const op = string.split("").reverse().join("");
    const newText = callback(op);
    console.log(newText);
}
exports.reverterString = reverterString;
function exibe(string) {
    return `A INVERSÃO DA SENTENÇA RESULTOU EM:  ${string.toUpperCase()}`;
}
exports.exibe = exibe;

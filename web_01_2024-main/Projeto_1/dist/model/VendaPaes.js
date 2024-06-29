"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendaPaes = void 0;
class VendaPaes {
    constructor(cpfCliente, valorTotal, itensComprados) {
        this.id = VendaPaes.nextId++;
        this.cpfCliente = cpfCliente;
        this.valorTotal = valorTotal;
        this.itensComprados = itensComprados;
    }
}
exports.VendaPaes = VendaPaes;
VendaPaes.nextId = 1;

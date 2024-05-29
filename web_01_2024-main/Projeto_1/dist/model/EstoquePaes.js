"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Estoque = void 0;
class Estoque {
    constructor(amount, modalidadeID, price) {
        this.id = Estoque.nextId++;
        this.amount = amount;
        this.modalidadeID = modalidadeID;
        this.price = price;
    }
}
exports.Estoque = Estoque;
Estoque.nextId = 1;

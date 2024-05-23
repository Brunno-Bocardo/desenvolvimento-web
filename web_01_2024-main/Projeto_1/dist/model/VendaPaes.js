"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendaPaes = void 0;
class VendaPaes {
    constructor(cpf, idModalidade, amount, price) {
        this.cpf = cpf;
        this.idModalidade = idModalidade;
        this.amount = amount;
        this.price = price;
        this.totalPrice = this.calculateTotalPrice();
    }
    calculateTotalPrice() {
        return this.amount * this.price;
    }
}
exports.VendaPaes = VendaPaes;

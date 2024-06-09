"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModalidadePaes = void 0;
class ModalidadePaes {
    constructor(name, price, vegan) {
        this.id = ModalidadePaes.nextId++;
        this.name = name;
        this.price = price;
        this.vegan = vegan;
    }
}
exports.ModalidadePaes = ModalidadePaes;
ModalidadePaes.nextId = 1;

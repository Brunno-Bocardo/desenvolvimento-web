"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModalidadePaes = void 0;
class ModalidadePaes {
    constructor(name, vegan) {
        this.id = ModalidadePaes.nextId++;
        this.name = name;
        this.vegan = vegan;
    }
}
exports.ModalidadePaes = ModalidadePaes;
ModalidadePaes.nextId = 1;

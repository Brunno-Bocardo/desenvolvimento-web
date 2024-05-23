"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModalidadePaesRepository = void 0;
class ModalidadePaesRepository {
    constructor() {
        this.modalidadeList = [];
    }
    insereModalidade(novaModalidade) {
        this.modalidadeList.push(novaModalidade);
    }
    pegarTodasModalidades() {
        return this.modalidadeList;
    }
    filtraProdutoPorId(id) {
        return this.modalidadeList.find(product => product.id === id);
    }
}
exports.ModalidadePaesRepository = ModalidadePaesRepository;

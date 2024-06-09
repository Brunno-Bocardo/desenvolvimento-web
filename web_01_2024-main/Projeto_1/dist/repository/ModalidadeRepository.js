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
    updateModalidade(id, name, price, vegan) {
        const modalidade = this.filtraProdutoPorId(id);
        if (modalidade) {
            modalidade.name = name;
            modalidade.price = price;
            modalidade.vegan = vegan;
            return modalidade;
        }
        else {
            return undefined;
        }
    }
    deleteModalidade(id) {
        const index = this.modalidadeList.findIndex(modalidade => modalidade.id === id);
        if (index !== -1) {
            console.log("Produto ", id, " deletado");
            this.modalidadeList.splice(index, 1);
            return true;
        }
        else {
            return false;
        }
    }
}
exports.ModalidadePaesRepository = ModalidadePaesRepository;

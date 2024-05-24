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
    updateModalidade(id, name, vegan) {
        const modalidade = this.filtraProdutoPorId(id);
        if (modalidade) {
            modalidade.name = name;
            modalidade.vegan = vegan;
            return modalidade;
        }
        else {
            return undefined;
        }
    }
}
exports.ModalidadePaesRepository = ModalidadePaesRepository;

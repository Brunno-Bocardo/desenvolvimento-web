"use strict";
// A camada Repository interage diretamente com a camada dos dados (model - vetor) 
// Ela adiciona, busca, deleta ou edita diretamente dessa camada 
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModalidadePaesRepository = void 0;
const global_1 = require("../global/global");
class ModalidadePaesRepository {
    insereModalidade(novaModalidade) {
        global_1.globalData.modalidadeList.push(novaModalidade);
    }
    pegarTodasModalidades() {
        return global_1.globalData.modalidadeList;
    }
    filtraProdutoPorId(id) {
        return global_1.globalData.modalidadeList.find(product => product.id === id);
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
    deleteModalidade(id) {
        const index = global_1.globalData.modalidadeList.findIndex(modalidade => modalidade.id === id);
        if (index !== -1) {
            console.log("Produto ", id, " deletado");
            global_1.globalData.modalidadeList.splice(index, 1);
            return true;
        }
        else {
            return false;
        }
    }
}
exports.ModalidadePaesRepository = ModalidadePaesRepository;

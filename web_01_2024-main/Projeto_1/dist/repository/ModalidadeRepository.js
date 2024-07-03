"use strict";
// A camada Repository interage diretamente com a camada dos dados (model - vetor) 
// Ela adiciona, busca, deleta ou edita diretamente dessa camada 
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModalidadePaesRepository = void 0;
const global_1 = require("../global/global");
class ModalidadePaesRepository {
    // create 
    insereModalidade(novaModalidade) {
        global_1.globalData.modalidadeList.push(novaModalidade);
    }
    // busca
    pegarTodasModalidades() {
        return global_1.globalData.modalidadeList;
    }
    // busca
    filtraProdutoPorId(id) {
        return global_1.globalData.modalidadeList.find(product => product.id === id);
    }
    // busca
    rastrearModalidade(name, vegan) {
        return global_1.globalData.modalidadeList.find(product => product.name === name && product.vegan === vegan);
    }
    // busca
    rastrearModalidadeGeral(id, name, vegan) {
        return global_1.globalData.modalidadeList.find(modalidade => modalidade.id === id && modalidade.name === name && modalidade.vegan === vegan);
    }
    // update
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
    // delete 
    deleteModalidade(id, name, vegan) {
        const modalidade = this.rastrearModalidadeGeral(id, name, vegan);
        if (modalidade) {
            const index = global_1.globalData.modalidadeList.indexOf(modalidade);
            if (index !== -1) {
                global_1.globalData.modalidadeList.splice(index, 1);
                return true;
            }
        }
        throw new Error("Modalidade não encontrada com o body fornecido");
    }
}
exports.ModalidadePaesRepository = ModalidadePaesRepository;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstoqueRepository = void 0;
const global_1 = require("../global/global");
// usado para verifica se a modalidade existe
const ModalidadeService_1 = require("../service/ModalidadeService");
const modalidadeService = new ModalidadeService_1.ModalidadeService();
class EstoqueRepository {
    inserirItem(novoItem) {
        const modalidadeID = novoItem.modalidadeID;
        console.log(modalidadeID);
        try {
            // verifica se a modalidade existe antes de criar um estoque pra ela 
            const modalidade = modalidadeService.consultarModalidade(modalidadeID);
            if (!modalidade) {
                throw new Error("Modalidade não encontrada");
            }
            // Se a modalidade existir, insere o item no estoque
            global_1.globalData.estoqueList.push(novoItem);
        }
        catch (error) {
            console.error('Erro ao inserir item:', error.message);
            throw error;
        }
    }
    recupararTodosOsItens() {
        return global_1.globalData.estoqueList;
    }
    filtraProdutoPorId(id) {
        return global_1.globalData.estoqueList.find(product => product.id === id);
    }
    updateItem(id, amount, price) {
        const item = this.filtraProdutoPorId(id);
        if (item) {
            item.id = id;
            item.amount = amount;
            item.price = price;
            return item;
        }
        else {
            return undefined;
        }
    }
    updateQuantidade(id, amount) {
        const item = this.filtraProdutoPorId(id);
        if (item) {
            if (item.amount >= amount) {
                item.amount -= amount;
                return item;
            }
        }
        return undefined;
    }
}
exports.EstoqueRepository = EstoqueRepository;

"use strict";
// A camada Repository interage diretamente com a camada dos dados (model - vetor) 
// Ela adiciona, busca, deleta ou edita diretamente dessa camada 
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstoqueRepository = void 0;
const global_1 = require("../global/global");
class EstoqueRepository {
    inserirItem(novoItem) {
        global_1.globalData.estoqueList.push(novoItem);
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
            item.amount += amount;
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
            item.amount -= amount;
            return item;
        }
        return undefined;
    }
}
exports.EstoqueRepository = EstoqueRepository;

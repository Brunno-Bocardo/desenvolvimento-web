// A camada Repository interage diretamente com a camada dos dados (model - vetor) 
// Ela adiciona, busca, deleta ou edita diretamente dessa camada 

import { Estoque } from "../model/EstoquePaes";
import { globalData } from "../global/global";

export class EstoqueRepository {
    inserirItem(novoItem: Estoque) {
        globalData.estoqueList.push(novoItem);
    }

    recupararTodosOsItens() {
        return globalData.estoqueList;
    }

    filtraProdutoPorId(id:number): Estoque | undefined {
        return globalData.estoqueList.find(product => product.id === id);
    }

    updateItem(id:number, amount:number, price:number): Estoque | undefined {
        const item = this.filtraProdutoPorId(id);
        if (item) {
            item.amount += amount;
            item.price = price;
            return item;
        } else {
            return undefined;
        }
    }

    updateQuantidade(id:number, amount:number): Estoque | undefined {
        const item = this.filtraProdutoPorId(id);
        if (item) {
            item.amount -= amount;
            return item;
        }
        return undefined;
    }
}

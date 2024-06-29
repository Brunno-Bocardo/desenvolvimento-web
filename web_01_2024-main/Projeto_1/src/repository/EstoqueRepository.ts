import { Estoque } from "../model/EstoquePaes";
import { globalData } from "../global/global";

// usado para verifica se a modalidade existe
import { ModalidadeService } from "../service/ModalidadeService";
const modalidadeService = new ModalidadeService();

export class EstoqueRepository {

    inserirItem(novoItem: Estoque) {
        const modalidadeID = novoItem.modalidadeID;
        console.log(modalidadeID);

        try {
            // verifica se a modalidade existe antes de criar um estoque pra ela 
            const modalidade = modalidadeService.consultarModalidade(modalidadeID);
            if (!modalidade) {
                throw new Error("Modalidade não encontrada");
            }

            // Se a modalidade existir, insere o item no estoque
            globalData.estoqueList.push(novoItem);
        } catch (error:any) {
            console.error('Erro ao inserir item:', error.message);
            throw error;
        }
    }


    recupararTodosOsItens() {
        return globalData.estoqueList
    }

    filtraProdutoPorId(id:number): Estoque|undefined {
        return globalData.estoqueList.find(product => product.id === id);
    }

    updateItem(id:number, amount:number, price:number):Estoque|undefined {
        const item = this.filtraProdutoPorId(id)
        if(item) {
            item.id = id
            item.amount = amount
            item.price = price
            return item
        } else {
            return undefined
        }
    }

    updateQuantidade(id:number, amount:number):Estoque|undefined {
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

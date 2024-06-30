// O service verifica se as informações estão corretas e completas
// Se estiverem, segue com a lógica para o Repository 
// Se não estiverem, retorna um erro 

import { Estoque } from "../model/EstoquePaes";
import { EstoqueRepository } from "../repository/EstoqueRepository";

export class EstoqueService {
    estoqueRepository:EstoqueRepository = new EstoqueRepository();

    inserirNoEstoque(item:any):Estoque {
        const {amount, modalidadeID, price} = item

        if (!amount || !modalidadeID || !price) {
            throw new Error("Informações incompletas");
        }

        const novoItem = new Estoque(amount, modalidadeID, price);
        this.estoqueRepository.inserirItem(novoItem);
        return novoItem
    }

    recuperarItens():Estoque[] {
        return this.estoqueRepository.recupararTodosOsItens();
    }

    consultarItemPorId(id: number):Estoque|undefined{  
        console.log(id)
        return this.estoqueRepository.filtraProdutoPorId(id);
    }

    alterarItemNoEstoque(itemData: any):Estoque|undefined {
        const {id, amount, modalidadeID, price} = itemData

        if (!id || !amount || !modalidadeID || !price) {
            throw new Error("Informações incompletas");
        }

        return this.estoqueRepository.updateItem(id, amount, price)
    }

    deletarQuantidadeEstoque(itemData: any):Estoque|undefined {
        const {id, amount, modalidadeID, price} = itemData

        if (!id || !amount || !modalidadeID || !price) {
            throw new Error("Informações incompletas");
        }

        return this.estoqueRepository.updateQuantidade(id, amount)
    }
}
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

    alterarItemNoEstoque(modalidadeData: any):Estoque|undefined {
        const {id, amount, modalidadeID, price} = modalidadeData

        if (!id || !amount || !modalidadeID || !price) {
            throw new Error("Informações incompletas");
        }

        // não passar o modalidadeID pq não acho que faça sentido
        return this.estoqueRepository.updateItem(id, amount, price)
    }
}
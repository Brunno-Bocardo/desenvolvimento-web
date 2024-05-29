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
}
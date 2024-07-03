// O service verifica se as informações estão corretas e completas
// Se estiverem, segue com a lógica para o Repository 
// Se não estiverem, retorna um erro 

import { Estoque } from "../model/EstoquePaes";
import { EstoqueRepository } from "../repository/EstoqueRepository";
import { ModalidadeService } from "./ModalidadeService";

export class EstoqueService {
    estoqueRepository: EstoqueRepository = new EstoqueRepository();
    modalidadeService: ModalidadeService = new ModalidadeService();

    inserirNoEstoque(item: any): Estoque {
        const { amount, modalidadeID, price } = item;

        if (!amount || !modalidadeID || !price) {
            throw new Error("Informações incompletas");
        }

        // Verifica se a modalidade existe antes de criar um estoque para ela
        const modalidade = this.modalidadeService.consultarModalidade(modalidadeID);
        if (!modalidade) {
            throw new Error("Modalidade não encontrada");
        }

        const novoItem = new Estoque(amount, modalidadeID, price);
        this.estoqueRepository.inserirItem(novoItem);
        return novoItem;
    }

    recuperarItens(): Estoque[] {
        return this.estoqueRepository.recupararTodosOsItens();
    }

    consultarItemPorId(id: number): Estoque | undefined {  
        console.log(id);
        return this.estoqueRepository.filtraProdutoPorId(id);
    }

    alterarItemNoEstoque(itemData: any): Estoque | undefined {
        const { id, amount, modalidadeID, price } = itemData;

        if (!id || !amount || !modalidadeID || !price) {
            throw new Error("Informações incompletas");
        }

        return this.estoqueRepository.updateItem(id, amount, price);
    }

    deletarQuantidadeEstoque(itemData: any): Estoque | undefined {
        const { id, amount, modalidadeID, price } = itemData;

        if (!id || !amount || !modalidadeID || !price) {
            throw new Error("Informações incompletas");
        }

        const item = this.estoqueRepository.updateQuantidade(id, amount);
        if (!item) {
            throw new Error("Quantidade insuficiente no estoque");
        }

        return item;
    }
}

import { Estoque } from "../model/EstoquePaes";
import { ModalidadePaesRepository } from "../repository/ModalidadeRepository";

export class EstoqueRepository {
    estoqueList: Estoque[] = [];
    modalidadeRepository: ModalidadePaesRepository;

    constructor() {
        this.modalidadeRepository = new ModalidadePaesRepository();
    }

    inserirItem(novoItem: Estoque) {
        const modalidadeID = novoItem.modalidadeID;
        console.log(modalidadeID)
        // Verificar se a modalidade existe
        const modalidade = this.modalidadeRepository.filtraProdutoPorId(modalidadeID);
        console.log(modalidade)
        if (!modalidade) {
            throw new Error("Modalidade não encontrada");
        }

        // Se a modalidade existir, insere o item no estoque
        this.estoqueList.push(novoItem);
    }
}

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstoqueRepository = void 0;
const ModalidadeRepository_1 = require("../repository/ModalidadeRepository");
class EstoqueRepository {
    constructor() {
        this.estoqueList = [];
        this.modalidadeRepository = new ModalidadeRepository_1.ModalidadePaesRepository();
    }
    inserirItem(novoItem) {
        const modalidadeID = novoItem.modalidadeID;
        console.log(modalidadeID);
        // Verificar se a modalidade existe
        const modalidade = this.modalidadeRepository.filtraProdutoPorId(modalidadeID);
        console.log(modalidade);
        if (!modalidade) {
            throw new Error("Modalidade não encontrada");
        }
        // Se a modalidade existir, insere o item no estoque
        this.estoqueList.push(novoItem);
    }
}
exports.EstoqueRepository = EstoqueRepository;

"use strict";
// O service verifica se as informações estão corretas e completas
// Se estiverem, segue com a lógica para o Repository 
// Se não estiverem, retorna um erro 
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstoqueService = void 0;
const EstoquePaes_1 = require("../model/EstoquePaes");
const EstoqueRepository_1 = require("../repository/EstoqueRepository");
class EstoqueService {
    constructor() {
        this.estoqueRepository = new EstoqueRepository_1.EstoqueRepository();
    }
    inserirNoEstoque(item) {
        const { amount, modalidadeID, price } = item;
        if (!amount || !modalidadeID || !price) {
            throw new Error("Informações incompletas");
        }
        const novoItem = new EstoquePaes_1.Estoque(amount, modalidadeID, price);
        this.estoqueRepository.inserirItem(novoItem);
        return novoItem;
    }
    recuperarItens() {
        return this.estoqueRepository.recupararTodosOsItens();
    }
    consultarItemPorId(id) {
        console.log(id);
        return this.estoqueRepository.filtraProdutoPorId(id);
    }
    alterarItemNoEstoque(itemData) {
        const { id, amount, modalidadeID, price } = itemData;
        if (!id || !amount || !modalidadeID || !price) {
            throw new Error("Informações incompletas");
        }
        return this.estoqueRepository.updateItem(id, amount, price);
    }
    deletarQuantidadeEstoque(itemData) {
        const { id, amount, modalidadeID, price } = itemData;
        if (!id || !amount || !modalidadeID || !price) {
            throw new Error("Informações incompletas");
        }
        return this.estoqueRepository.updateQuantidade(id, amount);
    }
}
exports.EstoqueService = EstoqueService;

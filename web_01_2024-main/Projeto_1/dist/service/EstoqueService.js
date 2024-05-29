"use strict";
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
}
exports.EstoqueService = EstoqueService;

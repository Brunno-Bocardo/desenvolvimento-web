"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.recuperaItensEstoque = exports.addItem = void 0;
const EstoqueService_1 = require("../service/EstoqueService");
const estoqueService = new EstoqueService_1.EstoqueService();
function addItem(req, res) {
    try {
        const itemAdicionado = estoqueService.inserirNoEstoque(req.body);
        res.status(201).json({
            mensagem: "Novo item adicionado ao estoque 😊",
            item: itemAdicionado
        });
    }
    catch (error) {
        res.status(400).json({ mensagem: error.message });
    }
}
exports.addItem = addItem;
function recuperaItensEstoque(req, res) {
    try {
        res.status(201).json(estoqueService.recuperarItens());
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
exports.recuperaItensEstoque = recuperaItensEstoque;

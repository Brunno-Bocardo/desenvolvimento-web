"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteQuantidade = exports.alterarItem = exports.buscarItemPorID = exports.recuperaItensEstoque = exports.addItem = void 0;
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
function buscarItemPorID(req, res) {
    try {
        const id = parseInt(req.params.id);
        console.log("ID: ", id);
        const item = estoqueService.consultarItemPorId(id);
        if (item) {
            res.status(201).json({
                mensagem: "Item no estoque encontrado com sucesso 😊",
                item: item
            });
        }
        else {
            res.status(400).json({ mensagem: "Item não encontrado... 😞" });
        }
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
exports.buscarItemPorID = buscarItemPorID;
function alterarItem(req, res) {
    try {
        const id = parseInt(req.body.id);
        console.log("ID: ", id);
        const item = estoqueService.consultarItemPorId(id);
        if (item) {
            const novaModalidade = estoqueService.alterarItemNoEstoque(req.body);
            res.status(201).json({
                mensagem: "Seu item foi alterado 🫡",
                produto: novaModalidade
            });
        }
        else {
            res.status(400).json({ mensagem: "Item não encontrado... 😞" });
        }
    }
    catch (error) {
        res.status(400).json({ mensagem: error.message });
    }
}
exports.alterarItem = alterarItem;
function deleteQuantidade(req, res) {
    try {
        const id = parseInt(req.body.id);
        console.log("ID: ", id);
        const item = estoqueService.consultarItemPorId(id);
        if (item) {
            const resultado = estoqueService.deletarQuantidadeEstoque(req.body);
            if (resultado) {
                res.status(201).json({
                    mensagem: "Essa quantidade foi apagada da existência 🫡",
                    quantidadeDeletada: req.body.amount
                });
            }
            else {
                res.status(400).json({
                    mensagem: "Erro: Quantidade a remover é maior do que a disponível no estoque 😞"
                });
            }
        }
        else {
            res.status(400).json({ mensagem: "Item não encontrado... 😞" });
        }
    }
    catch (error) {
        res.status(400).json({ mensagem: error.message });
    }
}
exports.deleteQuantidade = deleteQuantidade;

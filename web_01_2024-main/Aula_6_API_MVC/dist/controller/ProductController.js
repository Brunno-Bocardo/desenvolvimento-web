"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listaProdutos = exports.pesquisarProdutoPorID = exports.cadastrarProduto = void 0;
const ProductService_1 = require("../service/ProductService");
const productService = new ProductService_1.ProductService();
function cadastrarProduto(req, res) {
    try {
        const novoProduto = productService.cadastrarProduto(req.body);
        res.status(201).json({
            mensagem: "Produto adicionado com sucesso!",
            produto: novoProduto
        });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
exports.cadastrarProduto = cadastrarProduto;
;
function pesquisarProdutoPorID(req, res) {
    try {
        const produto = productService.consultarProduto(req.query.id);
        if (produto) {
            res.status(200).json({
                mensagem: "Produto encontrado com sucesso!",
                produto: produto
            });
        }
        else {
            res.status(404).json({ mensagem: "Produto não encontrado." });
        }
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
exports.pesquisarProdutoPorID = pesquisarProdutoPorID;
;
function listaProdutos(req, res) {
    try {
        res.status(200).json(productService.getProducts());
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
exports.listaProdutos = listaProdutos;
;

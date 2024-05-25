"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletarModalidade = exports.alterarModalidade = exports.recuperarModalidadePorID = exports.recuprarTodasAsModalidades = exports.criarModalidade = void 0;
const ModalidadeService_1 = require("../service/ModalidadeService");
const modalidadeService = new ModalidadeService_1.ModalidadeService();
function criarModalidade(req, res) {
    try {
        const novaModalidade = modalidadeService.cadastrarModalidade(req.body);
        res.status(201).json({
            mensagem: "Nova modalidade de pães adicionada 😊",
            produto: novaModalidade
        });
    }
    catch (error) {
        res.status(400).json({ mensagem: error.message });
    }
}
exports.criarModalidade = criarModalidade;
function recuprarTodasAsModalidades(req, res) {
    try {
        res.status(201).json(modalidadeService.pegarModalidades());
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
exports.recuprarTodasAsModalidades = recuprarTodasAsModalidades;
function recuperarModalidadePorID(req, res) {
    try {
        const id = parseInt(req.params.id);
        console.log("ID: ", id);
        const produto = modalidadeService.consultarModalidade(id);
        if (produto) {
            res.status(201).json({
                mensagem: "Modalidade de pão encontrada com sucesso 😊",
                produto: produto
            });
        }
        else {
            res.status(400).json({ mensagem: "Pão não encontrado... 😞" });
        }
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
exports.recuperarModalidadePorID = recuperarModalidadePorID;
function alterarModalidade(req, res) {
    try {
        const novaModalidade = modalidadeService.alterarModalidade(req.body);
        res.status(201).json({
            mensagem: "Sua modalidade de pão foi editada 🫡",
            produto: novaModalidade
        });
    }
    catch (error) {
        res.status(400).json({ mensagem: error.message });
    }
}
exports.alterarModalidade = alterarModalidade;
function deletarModalidade(req, res) {
    try {
        modalidadeService.deletarModalidade(req.body);
        res.status(201).json({
            mensagem: "Sua modalidade de pão foi apagada da existência 🫡",
            produto: "Não existe né"
        });
    }
    catch (error) {
        res.status(400).json({ mensagem: error.message });
    }
}
exports.deletarModalidade = deletarModalidade;

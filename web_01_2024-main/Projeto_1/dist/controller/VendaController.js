"use strict";
// O controller lida diretamente com as chamadas HTTP
// Ela passa pra frente o body e retorna uma resposta ao usuário
Object.defineProperty(exports, "__esModule", { value: true });
exports.recuperarVendaPorID = exports.realizarVenda = void 0;
const VendaService_1 = require("../service/VendaService");
const vendaService = new VendaService_1.VendaService();
function realizarVenda(req, res) {
    try {
        const venda = vendaService.fazerVenda(req.body);
        return res.status(200).json({ venda });
    }
    catch (error) {
        return res.status(400).json({ erro: error.message });
    }
}
exports.realizarVenda = realizarVenda;
function recuperarVendaPorID(req, res) {
    try {
        const id = parseInt(req.params.id);
        const venda = vendaService.consultarVenda(id);
        if (venda) {
            res.status(200).json({
                mensagem: `Segue o registro da venda para o ID: ${id} 😊`,
                venda: venda
            });
        }
        else {
            res.status(400).json({ mensagem: "Registro da venda não encontrado... 😞" });
        }
    }
    catch (error) {
        res.status(400).json({ erro: error.message });
    }
}
exports.recuperarVendaPorID = recuperarVendaPorID;

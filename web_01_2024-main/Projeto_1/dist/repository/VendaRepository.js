"use strict";
// A camada Repository interage diretamente com a camada dos dados (model - vetor) 
// Ela adiciona, busca, deleta ou edita diretamente dessa camada 
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendaRepository = void 0;
const VendaPaes_1 = require("../model/VendaPaes");
const global_1 = require("../global/global");
class VendaRepository {
    processarVenda(cpf, itens, total) {
        const novaVenda = new VendaPaes_1.VendaPaes(cpf, total, itens);
        global_1.globalData.vendaList.push(novaVenda);
        return novaVenda;
    }
    filtraVendaPorId(id) {
        return global_1.globalData.vendaList.find(product => product.id === id);
    }
}
exports.VendaRepository = VendaRepository;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendaRepository = void 0;
const VendaPaes_1 = require("../model/VendaPaes");
const ItemVenda_1 = require("../model/ItemVenda");
const global_1 = require("../global/global");
class VendaRepository {
    processarVenda(cpf, itens) {
        let resumoItens = [];
        let total = 0;
        for (const item of itens) {
            const estoqueItem = global_1.globalData.estoqueList.find((e) => e.id === item.estoquePaesID);
            if (!estoqueItem) {
                throw new Error(`Item com ID ${item.estoquePaesID} não encontrado`);
            }
            if (estoqueItem.amount < item.quantidade) {
                throw new Error(`Quantidade solicitada ultrapassa a quantidade em estoque para o item ${estoqueItem.modalidadeID}`);
            }
            const quantidadePedida = item.quantidade;
            estoqueItem.amount -= quantidadePedida;
            total += quantidadePedida * estoqueItem.price;
            resumoItens.push(new ItemVenda_1.ItemVenda(estoqueItem.id, quantidadePedida));
        }
        const novaVenda = new VendaPaes_1.VendaPaes(cpf, total, resumoItens);
        global_1.globalData.vendaList.push(novaVenda);
        return novaVenda;
    }
    filtraVendaPorId(id) {
        return global_1.globalData.vendaList.find(product => product.id === id);
    }
}
exports.VendaRepository = VendaRepository;

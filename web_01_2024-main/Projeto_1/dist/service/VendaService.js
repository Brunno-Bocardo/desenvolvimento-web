"use strict";
// O service verifica se as informações estão corretas e completas
// Se estiverem, segue com a lógica para o Repository 
// Se não estiverem, retorna um erro 
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendaService = void 0;
const ItemVenda_1 = require("../model/ItemVenda");
const VendaRepository_1 = require("../repository/VendaRepository");
const global_1 = require("../global/global");
const ModalidadeService_1 = require("../service/ModalidadeService");
const modalidadeService = new ModalidadeService_1.ModalidadeService();
class VendaService {
    constructor() {
        this.vendaRepository = new VendaRepository_1.VendaRepository();
    }
    fazerVenda(vendaData) {
        const { cpf, itens } = vendaData;
        if (!cpf || !itens || !Array.isArray(itens)) {
            throw new Error("Informações incompletas");
        }
        let resumoItens = [];
        let total = 0;
        for (const item of itens) {
            const estoqueItem = global_1.globalData.estoqueList.find((itemEstoque) => itemEstoque.id === item.estoquePaesID);
            // verifica a existencia do item 
            if (!estoqueItem) {
                throw new Error(`Item com ID ${item.estoquePaesID} não encontrado`);
            }
            // verifica se existe um estoque desse item 
            if (estoqueItem.amount < item.quantidade) {
                throw new Error(`Quantidade solicitada ultrapassa a quantidade em estoque para o item ${estoqueItem.modalidadeID}`);
            }
            const nomeItem = modalidadeService.consultarNomeDaModalidade(estoqueItem.id);
            const quantidadePedida = item.quantidade;
            estoqueItem.amount -= quantidadePedida;
            total += quantidadePedida * estoqueItem.price;
            resumoItens.push(new ItemVenda_1.ItemVenda(estoqueItem.id, quantidadePedida, nomeItem));
        }
        return this.vendaRepository.processarVenda(cpf, resumoItens, total);
    }
    consultarVenda(id) {
        console.log(id);
        return this.vendaRepository.filtraVendaPorId(id);
    }
}
exports.VendaService = VendaService;

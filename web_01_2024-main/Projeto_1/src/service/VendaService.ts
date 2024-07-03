// O service verifica se as informações estão corretas e completas
// Se estiverem, segue com a lógica para o Repository 
// Se não estiverem, retorna um erro 

import { VendaPaes } from '../model/VendaPaes';
import { ItemVenda } from '../model/ItemVenda';
import { VendaRepository } from '../repository/VendaRepository';
import { globalData } from '../global/global';

export class VendaService {
    vendaRepository: VendaRepository = new VendaRepository();

    fazerVenda(vendaData: any): VendaPaes {
        const { cpf, itens } = vendaData;

        if (!cpf || !itens || !Array.isArray(itens)) {
            throw new Error("Informações incompletas");
        }

        let resumoItens: ItemVenda[] = [];
        let total = 0;

        for (const item of itens) {
            const estoqueItem = globalData.estoqueList.find((itemEstoque) => itemEstoque.id === item.estoquePaesID);

            if (!estoqueItem) {
                throw new Error(`Item com ID ${item.estoquePaesID} não encontrado`);
            }

            if (estoqueItem.amount < item.quantidade) {
                throw new Error(`Quantidade solicitada ultrapassa a quantidade em estoque para o item ${estoqueItem.modalidadeID}`);
            }

            const quantidadePedida = item.quantidade;
            estoqueItem.amount -= quantidadePedida;
            total += quantidadePedida * estoqueItem.price;

            resumoItens.push(new ItemVenda(estoqueItem.id, quantidadePedida));
        }

        return this.vendaRepository.processarVenda(cpf, resumoItens, total);
    }

    consultarVenda(id: number): VendaPaes | undefined {
        console.log(id);
        return this.vendaRepository.filtraVendaPorId(id);
    }
}

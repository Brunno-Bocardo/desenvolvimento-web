import { VendaPaes } from '../model/VendaPaes';
import { ItemVenda } from '../model/ItemVenda';
import { globalData } from '../global/global';

export class VendaRepository {

    processarVenda(cpf: string, itens: any[]): VendaPaes {
        let resumoItens: ItemVenda[] = [];
        let total = 0

        for (const item of itens) {
            const estoqueItem = globalData.estoqueList.find((e) => e.id === item.estoquePaesID);

            if (!estoqueItem) {
                throw new Error(`Item com ID ${item.estoquePaesID} não encontrado`);
            }

            if (estoqueItem.amount < item.quantidade) {
                throw new Error(`Quantidade solicitada ultrapassa a quantidade em estoque para o item ${estoqueItem.modalidadeID}`);
            }

            const quantidadePedida = item.quantidade
            estoqueItem.amount -= quantidadePedida;
            total += quantidadePedida * estoqueItem.price;

            resumoItens.push(new ItemVenda(estoqueItem.id, quantidadePedida));
        }

        const novaVenda = new VendaPaes(cpf, total, resumoItens);

        globalData.vendaList.push(novaVenda);

        return novaVenda;
    }


    filtraVendaPorId(id:number): VendaPaes|undefined {
        return globalData.vendaList.find(product => product.id === id);
    }
}

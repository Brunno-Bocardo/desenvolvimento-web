// A camada Repository interage diretamente com a camada dos dados (model - vetor) 
// Ela adiciona, busca, deleta ou edita diretamente dessa camada 

import { VendaPaes } from '../model/VendaPaes';
import { ItemVenda } from '../model/ItemVenda';
import { globalData } from '../global/global';

export class VendaRepository {
    processarVenda(cpf: string, itens: ItemVenda[], total: number): VendaPaes {
        const novaVenda = new VendaPaes(cpf, total, itens);
        globalData.vendaList.push(novaVenda);
        return novaVenda;
    }

    filtraVendaPorId(id: number): VendaPaes | undefined {
        return globalData.vendaList.find(product => product.id === id);
    }
}

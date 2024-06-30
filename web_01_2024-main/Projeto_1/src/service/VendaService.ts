// O service verifica se as informações estão corretas e completas
// Se estiverem, segue com a lógica para o Repository 
// Se não estiverem, retorna um erro 

import { VendaPaes } from '../model/VendaPaes';
import { VendaRepository } from '../repository/VendaRepository';

export class VendaService {
    vendaRepository: VendaRepository = new VendaRepository();

    fazerVenda(vendaData: any): VendaPaes {
        const { cpf, itens } = vendaData;

        if (!cpf || !itens || !Array.isArray(itens)) {
            throw new Error("Informações incompletas");
        }

        return this.vendaRepository.processarVenda(cpf, itens);
    }

    consultarVenda(id: number):VendaPaes|undefined{  
        console.log(id)
        return this.vendaRepository.filtraVendaPorId(id);
    }
}
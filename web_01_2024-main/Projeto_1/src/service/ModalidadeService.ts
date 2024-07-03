// O service verifica se as informações estão corretas e completas
// Se estiverem, segue com a lógica para o Repository 
// Se não estiverem, retorna um erro 

import { ModalidadePaes } from "../model/ModalidadePaes";
import { ModalidadePaesRepository } from "../repository/ModalidadeRepository";

export class ModalidadeService {
    // cria uma instancia de ModalidadePaesRepository para usarmos as funções
    modalidadeRepository:ModalidadePaesRepository = new ModalidadePaesRepository();

    cadastrarModalidade(modalidadeData: any): ModalidadePaes {
        const {name, vegan} = modalidadeData

        if (!name || typeof vegan !== "boolean") {
            throw new Error("Informações incompletas");
        }

        const modalidadeEncontrada = this.modalidadeRepository.rastrearModalidade(name, vegan);
        if(modalidadeEncontrada){
            throw new Error("Modalidade já cadastrada >:(");
        }

        const novaModalidade = new ModalidadePaes(name, vegan);
        this.modalidadeRepository.insereModalidade(novaModalidade)
        return novaModalidade
    }

    pegarModalidades():ModalidadePaes[] {
        return this.modalidadeRepository.pegarTodasModalidades();
    }

    consultarModalidade(id: number):ModalidadePaes|undefined{  
        return this.modalidadeRepository.filtraProdutoPorId(id);
    }

    alterarModalidade(modalidadeData: any):ModalidadePaes|undefined {
        const {id, name, vegan} = modalidadeData

        if (!id || !name || typeof vegan !== "boolean") {
            throw new Error("Informações incompletas");
        }

        return this.modalidadeRepository.updateModalidade(id, name, vegan)
    }

    deletarModalidade(modalidadeData: any):boolean {
        const {id, name, vegan} = modalidadeData

        if (!id || !name || typeof vegan !== "boolean") {
            throw new Error("Informações incompletas");
        }

        return this.modalidadeRepository.deleteModalidade(id, name, vegan);
    }
}


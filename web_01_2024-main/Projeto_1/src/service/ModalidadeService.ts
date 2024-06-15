import { ModalidadePaes } from "../model/ModalidadePaes";
import { ModalidadePaesRepository } from "../repository/ModalidadeRepository";

export class ModalidadeService {
    modalidadeRepository:ModalidadePaesRepository = new ModalidadePaesRepository();

    cadastrarModalidade(modalidadeData: any): ModalidadePaes {
        const {name, vegan} = modalidadeData

        if (!name || typeof vegan !== "boolean") {
            throw new Error("Informações incompletas");
        }

        const novaModalidade = new ModalidadePaes(name, vegan);
        this.modalidadeRepository.insereModalidade(novaModalidade)
        return novaModalidade
    }

    pegarModalidades():ModalidadePaes[] {
        return this.modalidadeRepository.pegarTodasModalidades();
    }

    consultarModalidade(id: number):ModalidadePaes|undefined{  
        console.log(id)
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

        return this.modalidadeRepository.deleteModalidade(id)
    }
}


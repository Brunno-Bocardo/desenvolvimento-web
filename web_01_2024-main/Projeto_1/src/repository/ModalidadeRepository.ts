// A camada Repository interage diretamente com a camada dos dados (model - vetor) 
// Ela adiciona, busca, deleta ou edita diretamente dessa camada 

import { ModalidadePaes } from "../model/ModalidadePaes";
import { globalData } from "../global/global";

export class ModalidadePaesRepository {

    insereModalidade(novaModalidade:ModalidadePaes) {
        globalData.modalidadeList.push(novaModalidade)
    }

    pegarTodasModalidades() {
        return globalData.modalidadeList
    }

    filtraProdutoPorId(id:number): ModalidadePaes|undefined {
        return globalData.modalidadeList.find(product => product.id === id);
    }

    updateModalidade(id:number, name:string, vegan:boolean):ModalidadePaes|undefined {
        const modalidade = this.filtraProdutoPorId(id)
        if(modalidade) {
            modalidade.name = name
            modalidade.vegan = vegan
            return modalidade
        } else {
            return undefined
        }
    }

    deleteModalidade(id:number):boolean {
        const index = globalData.modalidadeList.findIndex(modalidade => modalidade.id === id);
        if(index !== -1) {
            console.log("Produto ", id, " deletado")
            globalData.modalidadeList.splice(index, 1)
            return true
        } else {
            return false
        }
    }
}
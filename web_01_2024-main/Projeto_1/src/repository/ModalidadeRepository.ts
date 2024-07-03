// A camada Repository interage diretamente com a camada dos dados (model - vetor) 
// Ela adiciona, busca, deleta ou edita diretamente dessa camada 

import { ModalidadePaes } from "../model/ModalidadePaes";
import { globalData } from "../global/global";

export class ModalidadePaesRepository {

    // create 
    insereModalidade(novaModalidade:ModalidadePaes) {
        globalData.modalidadeList.push(novaModalidade)
    }

    // busca
    pegarTodasModalidades() {
        return globalData.modalidadeList
    }

    // busca
    filtraProdutoPorId(id:number): ModalidadePaes|undefined {
        return globalData.modalidadeList.find(product => product.id === id);
    }

    // busca
    rastrearModalidade(name: string, vegan: boolean):ModalidadePaes|undefined{  
        return globalData.modalidadeList.find(product => product.name === name && product.vegan === vegan);
    }

    // busca
    rastrearModalidadeGeral(id: number, name: string, vegan: boolean): ModalidadePaes | undefined {  
        return globalData.modalidadeList.find(modalidade =>
            modalidade.id === id && modalidade.name === name && modalidade.vegan === vegan
        );
    }    

    // update
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

    // delete 
    deleteModalidade(id: number, name: string, vegan: boolean): boolean {
        const modalidade = this.rastrearModalidadeGeral(id, name, vegan);
        if (modalidade) {
            const index = globalData.modalidadeList.indexOf(modalidade);
            if (index !== -1) {
                globalData.modalidadeList.splice(index, 1);
                return true;
            }
        }
        throw new Error("Modalidade não encontrada com o body fornecido");
    }
}
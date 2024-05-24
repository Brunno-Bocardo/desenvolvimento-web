import { ModalidadePaes } from "../model/ModalidadePaes";

export class ModalidadePaesRepository {
    modalidadeList:ModalidadePaes[] = []

    insereModalidade(novaModalidade:ModalidadePaes) {
        this.modalidadeList.push(novaModalidade)
    }

    pegarTodasModalidades() {
        return this.modalidadeList
    }

    filtraProdutoPorId(id:number): ModalidadePaes|undefined {
        return this.modalidadeList.find(product => product.id === id);
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
}
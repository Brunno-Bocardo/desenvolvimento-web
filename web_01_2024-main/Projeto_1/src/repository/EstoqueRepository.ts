import axios from 'axios';
import { Estoque } from "../model/EstoquePaes";

export class EstoqueRepository {
    estoqueList: Estoque[] = [];


    async inserirItem(novoItem: Estoque) {
        const modalidadeID = novoItem.modalidadeID;
        console.log(modalidadeID);

        try {
            // // Faz uma solicitação para verificar se a modalidade existe
            // console.log("ID AQUI: ", modalidadeID)
            // const response = await axios.get(`http://127.0.0.1:3000/api/modalidade/${modalidadeID}`);
            // const modalidade = response.data;
            // console.log(response)
            // console.log(modalidade)

            // if (!modalidade) {
            //     throw new Error("Modalidade não encontrada");
            // }

            // Se a modalidade existir, insere o item no estoque
            this.estoqueList.push(novoItem);
        } catch (error:any) {
            console.error('Erro ao inserir item:', error.message);
            throw error;
        }
    }


    recupararTodosOsItens() {
        return this.estoqueList
    }

    filtraProdutoPorId(id:number): Estoque|undefined {
        return this.estoqueList.find(product => product.id === id);
    }

    updateItem(id:number, amount:number, price:number):Estoque|undefined {
        const modalidade = this.filtraProdutoPorId(id)
        if(modalidade) {
            modalidade.id = id
            modalidade.amount = amount
            modalidade.price = price
            return modalidade
        } else {
            return undefined
        }
    }
}

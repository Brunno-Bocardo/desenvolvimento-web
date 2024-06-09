"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstoqueRepository = void 0;
class EstoqueRepository {
    constructor() {
        this.estoqueList = [];
    }
    inserirItem(novoItem) {
        return __awaiter(this, void 0, void 0, function* () {
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
            }
            catch (error) {
                console.error('Erro ao inserir item:', error.message);
                throw error;
            }
        });
    }
    recupararTodosOsItens() {
        return this.estoqueList;
    }
}
exports.EstoqueRepository = EstoqueRepository;

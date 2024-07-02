"use strict";
// O service verifica se as informações estão corretas e completas
// Se estiverem, segue com a lógica para o Repository 
// Se não estiverem, retorna um erro 
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModalidadeService = void 0;
const ModalidadePaes_1 = require("../model/ModalidadePaes");
const ModalidadeRepository_1 = require("../repository/ModalidadeRepository");
class ModalidadeService {
    constructor() {
        // cria uma instancia de ModalidadePaesRepository para usarmos as funções
        this.modalidadeRepository = new ModalidadeRepository_1.ModalidadePaesRepository();
    }
    cadastrarModalidade(modalidadeData) {
        const { name, vegan } = modalidadeData;
        if (!name || typeof vegan !== "boolean") {
            throw new Error("Informações incompletas");
        }
        const novaModalidade = new ModalidadePaes_1.ModalidadePaes(name, vegan);
        this.modalidadeRepository.insereModalidade(novaModalidade);
        return novaModalidade;
    }
    pegarModalidades() {
        return this.modalidadeRepository.pegarTodasModalidades();
    }
    consultarModalidade(id) {
        console.log(id);
        return this.modalidadeRepository.filtraProdutoPorId(id);
    }
    alterarModalidade(modalidadeData) {
        const { id, name, vegan } = modalidadeData;
        if (!id || !name || typeof vegan !== "boolean") {
            throw new Error("Informações incompletas");
        }
        return this.modalidadeRepository.updateModalidade(id, name, vegan);
    }
    deletarModalidade(modalidadeData) {
        const { id, name, vegan } = modalidadeData;
        if (!id || !name || typeof vegan !== "boolean") {
            throw new Error("Informações incompletas");
        }
        return this.modalidadeRepository.deleteModalidade(id);
    }
}
exports.ModalidadeService = ModalidadeService;

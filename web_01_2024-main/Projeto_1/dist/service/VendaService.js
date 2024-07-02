"use strict";
// O service verifica se as informações estão corretas e completas
// Se estiverem, segue com a lógica para o Repository 
// Se não estiverem, retorna um erro 
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendaService = void 0;
const VendaRepository_1 = require("../repository/VendaRepository");
class VendaService {
    constructor() {
        this.vendaRepository = new VendaRepository_1.VendaRepository();
    }
    fazerVenda(vendaData) {
        const { cpf, itens } = vendaData;
        if (!cpf || !itens || !Array.isArray(itens)) {
            throw new Error("Informações incompletas");
        }
        return this.vendaRepository.processarVenda(cpf, itens);
    }
    consultarVenda(id) {
        console.log(id);
        return this.vendaRepository.filtraVendaPorId(id);
    }
}
exports.VendaService = VendaService;

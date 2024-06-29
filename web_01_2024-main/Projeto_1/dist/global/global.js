"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalData = exports.GlobalClass = void 0;
class GlobalClass {
    constructor() {
        // Lista da modalidade
        this.modalidadeList = [];
        // Lista do estoque 
        this.estoqueList = [];
        // Lista das vendas
    }
}
exports.GlobalClass = GlobalClass;
// Exporto uma instancia que vai conter todos os arrays no mesmo lugar 
exports.globalData = new GlobalClass();

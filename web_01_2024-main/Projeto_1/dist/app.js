"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ModalidadeController_1 = require("./controller/ModalidadeController");
const EstoqueController_1 = require("./controller/EstoqueController");
const VendaController_1 = require("./controller/VendaController");
const app = (0, express_1.default)();
const PORT = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3000;
app.use(express_1.default.json());
function logInfo() {
    console.log(`API em execução no URL: http:localhost:${PORT}`);
}
// Modalidade 
app.post("/api/modalidade", ModalidadeController_1.criarModalidade); // OK
app.get("/api/modalidade/todas", ModalidadeController_1.recuprarTodasAsModalidades); // OK
app.get("/api/modalidade/:id", ModalidadeController_1.recuperarModalidadePorID); // OK
app.put("/api/modalidade/:id", ModalidadeController_1.alterarModalidade); // OK
app.delete("/api/modalidade", ModalidadeController_1.deletarModalidade); // OK
// Estoque 
app.post("/api/estoque", EstoqueController_1.addItem); // quase
// pode mais de 1 estoque por modalidade?
// está somando ids pra modalidades não encontradas 
app.get("/api/estoque/todos", EstoqueController_1.recuperaItensEstoque); // OK
app.get("/api/estoque/:id", EstoqueController_1.buscarItemPorID); // OK
app.put("/api/estoque", EstoqueController_1.alterarItem); // OK
app.delete("/api/estoque", EstoqueController_1.deleteQuantidade); // OK
// Venda 
app.post("/api/venda", VendaController_1.realizarVenda); // OK
app.get("/api/venda/:id", VendaController_1.recuperarVendaPorID); // OK
app.listen(PORT, logInfo);

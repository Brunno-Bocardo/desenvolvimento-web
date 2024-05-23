"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ModalidadeController_1 = require("./controller/ModalidadeController");
// import { criarModalidade, recuprarTodasAsModalidades, recuperarModalidade, alterarModalidade, deletarModalidade } from "./controller/ModalidadeController";
// import { addItem, recuperaItensEstoque, buscarItem, addQuantidade, deleteQuantidade } from "./controller/EstoqueController";
// import { realizarVenda, recuperarVenda } from "./controller/VendaController";
const app = (0, express_1.default)();
const PORT = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3000;
app.use(express_1.default.json());
function logInfo() {
    console.log(`API em execução no URL: http:localhost:${PORT}`);
}
// Modalidade 
app.post("/api/modalidade", ModalidadeController_1.criarModalidade); //OK
app.get("/api/modalidade/todas", ModalidadeController_1.recuprarTodasAsModalidades); //OK
app.get("/api/modalidade/:id", ModalidadeController_1.recuperarModalidadePorID);
// app.put("/api/modalidade", alterarModalidade)
// app.delete("/api/modalidade", deletarModalidade)
// Estoque 
// app.post("/api/estoque", addItem)
// app.get("/api/estoque/todos", recuperaItensEstoque)
// app.get("/api/estoque", buscarItem)
// app.put("/api/estoque", addQuantidade)
// app.delete("/api/estoque", deleteQuantidade)
// Venda 
// app.post("/api/venda", realizarVenda)
// app.get("/api/venda", recuperarVenda)
app.listen(PORT, logInfo);

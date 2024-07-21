"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const LivroController_1 = require("./controller/LivroController");
const app = (0, express_1.default)();
const PORT = 3000;
app.use(express_1.default.json());
app.post("/books", LivroController_1.inserirLivro);
app.get("/books", LivroController_1.consultarTodosOsLivros);
app.get("/books/:id", LivroController_1.consultarLivroPorID);
app.put("/books/:id", LivroController_1.atualizarLivro);
app.delete("/books/:id", LivroController_1.deletarLivro);
app.listen(PORT, () => console.log("API online na porta: " + PORT));

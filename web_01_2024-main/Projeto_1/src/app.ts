import express from "express";
import { criarModalidade, recuprarTodasAsModalidades, recuperarModalidadePorID, alterarModalidade, deletarModalidade } from "./controller/ModalidadeController";
import { addItem, recuperaItensEstoque, buscarItemPorID, alterarItem, deleteQuantidade } from "./controller/EstoqueController";
import { realizarVenda, recuperarVendaPorID } from "./controller/VendaController";

const app = express();
const PORT = process.env.PORT ?? 3000;
app.use(express.json());

function logInfo() {
    console.log(`API em execução no URL: http:localhost:${PORT}`);
}

// Modalidade 
app.post("/api/modalidade", criarModalidade)                 // OK
app.get("/api/modalidade/todas", recuprarTodasAsModalidades) // OK
app.get("/api/modalidade/:id", recuperarModalidadePorID)     // OK
app.put("/api/modalidade/:id", alterarModalidade)            // OK
app.delete("/api/modalidade", deletarModalidade)             // OK

// Estoque 
app.post("/api/estoque", addItem)                            // OK
app.get("/api/estoque/todos", recuperaItensEstoque)          // OK
app.get("/api/estoque/:id", buscarItemPorID)                 // OK
app.put("/api/estoque", alterarItem)                         // OK
app.delete("/api/estoque", deleteQuantidade)                 // OK

// Venda 
app.post("/api/venda", realizarVenda)                        // OK
app.get("/api/venda/:id", recuperarVendaPorID)               // OK


app.listen(PORT, logInfo)
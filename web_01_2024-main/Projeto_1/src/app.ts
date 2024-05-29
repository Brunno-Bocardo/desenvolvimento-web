import express from "express";
import { criarModalidade, recuprarTodasAsModalidades, recuperarModalidadePorID, alterarModalidade, deletarModalidade } from "./controller/ModalidadeController";
import { addItem } from "./controller/EstoqueController";
// import { realizarVenda, recuperarVenda } from "./controller/VendaController";

const app = express();
const PORT = process.env.PORT ?? 3000;
app.use(express.json());

function logInfo() {
    console.log(`API em execução no URL: http:localhost:${PORT}`);
}

// Modalidade 
app.post("/api/modalidade", criarModalidade)                 //OK
app.get("/api/modalidade/todas", recuprarTodasAsModalidades) //OK
app.get("/api/modalidade/:id", recuperarModalidadePorID)     //OK
app.put("/api/modalidade/:id", alterarModalidade)            //OK
app.delete("/api/modalidade", deletarModalidade)             //OK

// Estoque 
app.post("/api/estoque", addItem)
// app.get("/api/estoque/todos", recuperaItensEstoque)
// app.get("/api/estoque", buscarItem)
// app.put("/api/estoque", addQuantidade)
// app.delete("/api/estoque", deleteQuantidade)

// Venda 
// app.post("/api/venda", realizarVenda)
// app.get("/api/venda", recuperarVenda)


app.listen(PORT, logInfo)
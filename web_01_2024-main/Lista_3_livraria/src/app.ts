import express from 'express';
import { inserirLivro, consultarTodosOsLivros, consultarLivroPorID, atualizarLivro, deletarLivro } from './controller/LivroController';

const app = express();
const PORT = 3000;
app.use(express.json());

app.post("/books", inserirLivro);
app.get("/books", consultarTodosOsLivros);
app.get("/books/:id", consultarLivroPorID);
app.put("/books/:id", atualizarLivro);
app.delete("/books/:id", deletarLivro);

app.listen(PORT, ()=> console.log("API online na porta: " + PORT));
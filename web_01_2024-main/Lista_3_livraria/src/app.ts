import express from 'express';
import { inserirLivro } from './controller/LivroController';

const app = express();
const PORT = 3000;
app.use(express.json());

app.post("/books", inserirLivro)

app.listen(PORT, ()=> console.log("API online na porta: " + PORT));
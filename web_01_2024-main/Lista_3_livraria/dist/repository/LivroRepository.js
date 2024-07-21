"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LivroRepository = void 0;
const mysql_1 = require("../database/mysql");
const Livro_1 = require("../model/Livro");
class LivroRepository {
    constructor() {
        this.createTable();
    }
    createTable() {
        return __awaiter(this, void 0, void 0, function* () {
            const query = `
            CREATE TABLE IF NOT EXISTS livraria.livro (
                id INT AUTO_INCREMENT PRIMARY KEY,
                title VARCHAR(255) NOT NULL,
                author VARCHAR(255) NOT NULL,
                publishedDate VARCHAR(255) NOT NULL,
                isbn VARCHAR(20) NOT NULL,
                pages INT NOT NULL,
                language VARCHAR(50) NOT NULL,
                publisher VARCHAR(255) NOT NULL
            );
        `;
            try {
                const resultado = yield (0, mysql_1.executarComandoSQL)(query, []);
                console.log('Query executada com sucesso:', resultado);
            }
            catch (err) {
                console.error('Error');
            }
        });
    }
    insertLivro(livroData) {
        return __awaiter(this, void 0, void 0, function* () {
            const { title, author, publishedDate, isbn, pages, language, publisher } = livroData;
            const valores = [title, author, publishedDate, isbn, pages, language, publisher];
            const query = `
            INSERT INTO livraria.livro (title, author, publishedDate, isbn, pages, language, publisher)
            VALUES (?, ?, ?, ?, ?, ?, ?);
        `;
            try {
                const result = yield (0, mysql_1.executarComandoSQL)(query, valores);
                if (result) {
                    console.log("Livro adicionado na estante. ID: ", result.insertId);
                    const newLivro = new Livro_1.Livro(result.insertId, title, author, publishedDate, isbn, pages, language, publisher);
                    return new Promise((resolve) => {
                        resolve(newLivro);
                    });
                }
            }
            catch (err) {
                console.log("Erro ao inserir o livro: ", err);
                throw err;
            }
        });
    }
    buscarLivros() {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "SELECT * FROM livraria.livro;";
            try {
                const result = yield (0, mysql_1.executarComandoSQL)(query, []);
                return result;
            }
            catch (err) {
                console.log("Erro ao buscar livros: ", err);
                throw err;
            }
        });
    }
    buscarLivroPorID(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "SELECT * FROM livraria.livro WHERE id = (?);";
            try {
                const result = yield (0, mysql_1.executarComandoSQL)(query, [id]);
                return result;
            }
            catch (err) {
                console.log("Erro ao buscar livros: ", err);
                throw err;
            }
        });
    }
    atualizarLivro(id, livroData) {
        return __awaiter(this, void 0, void 0, function* () {
            const { title, author, publishedDate, isbn, pages, language, publisher } = livroData;
            const valores = [title, author, publishedDate, isbn, pages, language, publisher, id];
            const query = `
            UPDATE livraria.livro
            SET title = ?, author = ?, publishedDate = ?, isbn = ?, pages = ?, language = ?, publisher = ?
            WHERE id = ?;
        `;
            try {
                const result = yield (0, mysql_1.executarComandoSQL)(query, valores);
                return result;
            }
            catch (err) {
                throw err;
            }
        });
    }
    apagarLivro(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "DELETE FROM livraria.livro WHERE id = ?;";
            try {
                yield (0, mysql_1.executarComandoSQL)(query, [id]);
            }
            catch (err) {
                console.log("Erro ao deletar livro: ", err);
                throw err;
            }
        });
    }
    // =============== FUNÇÕES DE VERIFICAÇÃO ===============
    validarLivroData(livroData) {
        return __awaiter(this, void 0, void 0, function* () {
            const { title, author, publishedDate, isbn, pages, language, publisher } = livroData;
            let mensagem = '';
            if (!title || typeof title !== 'string' || title.trim() === '') {
                mensagem = "Título inválido. Deve ser uma string não vazia.";
            }
            else if (!author || typeof author !== 'string' || author.trim() === '') {
                mensagem = "Autor inválido. Deve ser uma string não vazia.";
            }
            else if (!publishedDate || typeof publishedDate !== 'string' || publishedDate.trim() === '') {
                mensagem = "Data de publicação inválida. Deve ser uma string não vazia.";
            }
            else if (!isbn || typeof isbn !== 'string' || isbn.trim() === '') {
                mensagem = "ISBN inválido. Deve ser uma string não vazia.";
            }
            else if (typeof pages !== 'number' || isNaN(pages) || pages <= 0) {
                mensagem = "Número de páginas inválido. Deve ser um número positivo.";
            }
            else if (!language || typeof language !== 'string' || language.trim() === '') {
                mensagem = "Idioma inválido. Deve ser uma string não vazia.";
            }
            else if (!publisher || typeof publisher !== 'string' || publisher.trim() === '') {
                mensagem = "Editora inválida. Deve ser uma string não vazia.";
            }
            if (mensagem !== '') {
                throw new Error(mensagem);
            }
        });
    }
    verificarISBN(isbn) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "SELECT isbn FROM livraria.livro WHERE isbn = (?);";
            try {
                const result = yield (0, mysql_1.executarComandoSQL)(query, [isbn]);
                return result.length;
            }
            catch (err) {
                console.log("Erro ao buscar ISBN: ", err);
                throw err;
            }
        });
    }
    verificarID(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "SELECT id FROM livraria.livro WHERE id = (?);";
            try {
                const result = yield (0, mysql_1.executarComandoSQL)(query, [id]);
                return result.length;
            }
            catch (err) {
                console.log("Erro ao buscar ID: ", err);
                throw err;
            }
        });
    }
}
exports.LivroRepository = LivroRepository;

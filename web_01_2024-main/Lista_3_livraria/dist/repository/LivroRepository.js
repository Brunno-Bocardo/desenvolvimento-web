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
            )
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
    insertLivro(title, author, publishedDate, isbn, pages, language, publisher) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = `
            INSERT INTO livraria.livro (title, author, publishedDate, isbn, pages, language, publisher)
            VALUES (?, ?, ?, ?, ?, ?, ?);
        `;
            const valores = [title, author, publishedDate, isbn, pages, language, publisher];
            try {
                const result = yield (0, mysql_1.executarComandoSQL)(query, valores);
                return result;
            }
            catch (err) {
                console.log("Erro ao adicionar livro: ", err);
                throw err;
            }
        });
    }
    buscarLivros() {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "SELECT * FROM livraria.livro;";
            try {
                const result = yield (0, mysql_1.executarComandoSQL)(query, []);
                if (result) {
                    return result;
                }
                else {
                    throw new Error("Nenhum livro encontrado");
                }
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
                if (result.length > 0) {
                    return result;
                }
                else {
                    throw new Error("Não existe um livro cadastrado com esse ID");
                }
            }
            catch (err) {
                console.log("Erro ao buscar livros: ", err);
                throw err;
            }
        });
    }
    verificarISBN(isbn) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "SELECT isbn FROM livraria.livro WHERE isbn = (?);";
            try {
                const result = yield (0, mysql_1.executarComandoSQL)(query, [isbn]);
                if (result.length > 0) {
                    throw new Error("Já existe um livro cadastrado com esse ISBN");
                }
                else
                    return true;
            }
            catch (err) {
                console.log("Erro ao buscar ISBN: ", err);
                throw err;
            }
        });
    }
}
exports.LivroRepository = LivroRepository;

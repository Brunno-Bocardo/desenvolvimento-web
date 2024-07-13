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
            create table if not exists livraria.livro (
                id int auto_increment primary key,
                title varchar(255) not null
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
    insertLivro(title) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "insert into livraria.livro (title) values(?)";
            try {
                const result = yield (0, mysql_1.executarComandoSQL)(query, [title]);
                if (result) {
                    console.log("Livro adicionado na estante. ID: ", result.insertId);
                    const newLivro = new Livro_1.Livro(result.insertId, title);
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
}
exports.LivroRepository = LivroRepository;

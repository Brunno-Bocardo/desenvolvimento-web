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
exports.LivroService = void 0;
const LivroRepository_1 = require("../repository/LivroRepository");
class LivroService {
    constructor() {
        this.livroRepository = new LivroRepository_1.LivroRepository();
    }
    registrarLivro(livroData) {
        return __awaiter(this, void 0, void 0, function* () {
            const isbn = livroData.isbn;
            yield this.livroRepository.validarLivroData(livroData);
            const verificaISBN = yield this.livroRepository.verificarISBN(isbn);
            if (verificaISBN > 0) {
                throw new Error("Já existe um livro cadastrado com esse ISBN");
            }
            const novoLivro = yield this.livroRepository.insertLivro(livroData);
            console.log("Service - Insert - ", novoLivro);
            return novoLivro;
        });
    }
    consultarLivros() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.livroRepository.buscarLivros();
            if (result) {
                return result;
            }
            else {
                throw new Error("Nenhum livro encontrado");
            }
        });
    }
    consultarLivro(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const resultadoBusca = yield this.livroRepository.buscarLivroPorID(id);
            if (resultadoBusca.length > 0) {
                return resultadoBusca;
            }
            else {
                throw new Error("Não existe um livro cadastrado com esse ID");
            }
        });
    }
    updateLivro(id, livroData) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.livroRepository.validarLivroData(livroData);
            const resultadoBusca = yield this.livroRepository.verificarID(id);
            if (resultadoBusca > 0) {
                const livroAtualizado = yield this.livroRepository.atualizarLivro(id, livroData);
                if (livroAtualizado) {
                    return this.consultarLivro(id);
                }
            }
            else {
                throw new Error("Não existe um livro cadastrado com esse ID");
            }
        });
    }
    deletarLivro(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const resultadoBusca = yield this.livroRepository.verificarID(id);
            if (resultadoBusca > 0) {
                return yield this.livroRepository.apagarLivro(id);
            }
            else {
                throw new Error("Não existe um livro cadastrado com esse ID");
            }
        });
    }
}
exports.LivroService = LivroService;

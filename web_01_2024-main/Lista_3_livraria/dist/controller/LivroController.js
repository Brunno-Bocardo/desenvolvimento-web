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
exports.inserirLivro = inserirLivro;
const LivroService_1 = require("../service/LivroService");
const livroService = new LivroService_1.LivroService();
function inserirLivro(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const novoLivro = yield livroService.registrarLivro(req.body);
            res.status(200).json({
                mensagem: "Seu livro foi adicionado com sucesso",
                livro: novoLivro
            });
        }
        catch (err) {
            res.status(400).json({ message: err.message });
        }
    });
}

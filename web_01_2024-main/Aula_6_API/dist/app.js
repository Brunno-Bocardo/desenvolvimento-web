"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const PORT = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3000;
function appLog() {
    console.log("A API está disponível na porta http://localhost:3000");
}
// req : o que eu quero pegar pra usar aqui dentro
// res : o que eu quero retornar 
function hello(req, res) {
    const obj = req.body;
    console.log(obj);
    return res.status(201).json({
        mensagem: "Produto adicionado com sucesso!",
        objeto: obj
    });
}
;
app.get("/api/hello", hello);
app.listen(PORT, appLog);

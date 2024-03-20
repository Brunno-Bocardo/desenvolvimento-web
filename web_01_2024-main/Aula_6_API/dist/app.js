"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3000;
function appLog() {
    console.log("A API está disponível na porta http://localhost:3000");
}
function hello(resq, res) {
    return res.status(201).json({
        mensagem: "Hello User, my name is machine",
        mensagem2: "Prometo que seu fim será breve"
    });
}
;
// function name(resq:Request, res:Response, value:string) {
//     return res.send("Hello User, my name is machine") 
// }
app.get("/api/hello", hello);
// app.post("/api/name", )
app.listen(PORT, appLog);

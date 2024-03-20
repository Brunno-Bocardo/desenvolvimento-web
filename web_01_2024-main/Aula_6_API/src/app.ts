import express, {Request, Response} from 'express';

const app = express();
const PORT = process.env.PORT ?? 3000;

function appLog(){
    console.log("A API está disponível na porta http://localhost:3000")
}

function hello(resq:Request, res:Response) {
    return res.status(201).json({
        mensagem: "Hello User, my name is machine",
        mensagem2: "Prometo que seu fim será breve"
    });
};

// function name(resq:Request, res:Response, value:string) {
//     return res.send("Hello User, my name is machine") 
// }

app.get("/api/hello", hello)
// app.post("/api/name", )


app.listen(PORT, appLog)
import express, {Request, Response} from 'express';

const app = express();
app.use(express.json())
const PORT = process.env.PORT ?? 3000;

function appLog(){
    console.log("A API está disponível na porta http://localhost:3000")
}

// req : o que eu quero pegar pra usar aqui dentro
// res : o que eu quero retornar 
function hello(req:Request, res:Response) {
    const obj: {
        name: string,
        description: string,
        price: number
    } = req.body;
    console.log(obj)

    return res.status(201).json({
        mensagem: "Produto adicionado com sucesso!",
        objeto:obj
    });
};


app.get("/api/hello", hello)


app.listen(PORT, appLog)
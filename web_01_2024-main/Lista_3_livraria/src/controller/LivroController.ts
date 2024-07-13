import { Request, Response } from "express";
import { LivroService } from "../service/LivroService";

const livroService = new LivroService()

export async function inserirLivro(req:Request, res:Response) {
    try {
        const novoLivro = await livroService.registrarLivro(req.body)
        res.status(200).json({
            mensagem: "Seu livro foi adicionado com sucesso",
            livro: novoLivro
        })
    } catch (err: any) {
        res.status(400).json({ message: err.message});
    }
}
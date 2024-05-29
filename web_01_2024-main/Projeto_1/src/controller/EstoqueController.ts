import { Request, Response } from "express";
import { EstoqueService } from "../service/EstoqueService";
const estoqueService = new EstoqueService();

export function addItem(req:Request, res:Response) {
    try {
        const itemAdicionado = estoqueService.inserirNoEstoque(req.body)
        res.status(201).json({
            mensagem: "Novo item adicionado ao estoque 😊",
            item: itemAdicionado
        })
    } catch(error: any) {
        res.status(400).json({ mensagem: error.message })
    }
}
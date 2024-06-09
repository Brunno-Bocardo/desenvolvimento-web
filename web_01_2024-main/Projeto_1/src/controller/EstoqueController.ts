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

export function recuperaItensEstoque(req:Request, res:Response) {
    try {
        res.status(201).json(estoqueService.recuperarItens());
    } catch (error: any) {
        res.status(400).json({ message: error.message});
    }
}

export function buscarItemPorID(req:Request, res:Response) {
    try {
        const id = parseInt(req.params.id); 
        console.log("ID: ", id)
        const item = estoqueService.consultarItemPorId(id);
        if(item){
            res.status(201).json({
                mensagem:"Item no estoque encontrado com sucesso 😊",
                item:item
            });
        }else{
            res.status(400).json({mensagem:"Item não encontrado... 😞"});
        }
    } catch (error: any) {
        res.status(400).json({ message: error.message});
    }
}

export function alterarItem(req:Request, res:Response) {
    try {
        const id = parseInt(req.body.id); 
        console.log("ID: ", id)
        const item = estoqueService.consultarItemPorId(id);
        if(item) {
            const novaModalidade = estoqueService.alterarItemNoEstoque(req.body)
            res.status(201).json({
                mensagem: "Seu item foi alterado 🫡",
                produto: novaModalidade
            })
        }else{
            res.status(400).json({mensagem:"Item não encontrado... 😞"});
        }
    } catch(error: any) {
        res.status(400).json({ mensagem: error.message })
    }
}

export function deleteQuantidade(req:Request, res:Response) {
    try {
        const id = parseInt(req.body.id);
        console.log("ID: ", id);
        const item = estoqueService.consultarItemPorId(id);
        if (item) {
            const resultado = estoqueService.deletarQuantidadeEstoque(req.body);
            if (resultado) {
                res.status(201).json({
                    mensagem: "Essa quantidade foi apagada da existência 🫡",
                    quantidadeDeletada: req.body.amount
                });
            } else {
                res.status(400).json({
                    mensagem: "Erro: Quantidade a remover é maior do que a disponível no estoque 😞"
                });
            }
        } else {
            res.status(400).json({ mensagem: "Item não encontrado... 😞" });
        }
    } catch (error:any) {
        res.status(400).json({ mensagem: error.message });
    }
}
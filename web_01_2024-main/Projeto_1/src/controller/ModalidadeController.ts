import { Request, Response } from "express";
import { ModalidadeService } from "../service/ModalidadeService";
const modalidadeService = new ModalidadeService();

export function criarModalidade(req:Request, res:Response) {
    try {
        const novaModalidade = modalidadeService.cadastrarModalidade(req.body)
        res.status(201).json({
            mensagem: "Nova modalidade de pães adicionada 😊",
            produto: novaModalidade
        })
    } catch(error: any) {
        res.status(400).json({ mensagem: error.message })
    }
}

export function recuprarTodasAsModalidades(req:Request, res:Response) {
    try {
        res.status(201).json(modalidadeService.pegarModalidades());
    } catch (error: any) {
        res.status(400).json({ message: error.message});
    }
}

export function recuperarModalidadePorID(req:Request, res:Response) {
    try {
        const id = parseInt(req.params.id); 
        console.log("ID: ", id)
        const produto = modalidadeService.consultarModalidade(id);
        if(produto){
        res.status(201).json({
            mensagem:"Modalidade de pão encontrada com sucesso 😊",
            produto:produto
        });
        }else{
            res.status(400).json({mensagem:"Pão não encontrado... 😞"});
        }
    } catch (error: any) {
        res.status(400).json({ message: error.message});
    }
}

export function alterarModalidade(req:Request, res:Response) {
    try {
        const novaModalidade = modalidadeService.alterarModalidade(req.body)
        res.status(201).json({
            mensagem: "Sua modalidade de pão foi editada 🫡",
            produto: novaModalidade
        })
    } catch(error: any) {
        res.status(400).json({ mensagem: error.message })
    }
}

export function deletarModalidade(req:Request, res:Response) {
    try {
        modalidadeService.deletarModalidade(req.body)
        res.status(201).json({
            mensagem: "Sua modalidade de pão foi apagada da existência 🫡",
            produto: "Não existe né"
        })
    } catch(error: any) {
        res.status(400).json({ mensagem: error.message })
    }
}
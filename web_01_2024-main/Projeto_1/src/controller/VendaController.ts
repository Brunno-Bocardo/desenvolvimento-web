// O controller lida diretamente com as chamadas HTTP
// Ela passa pra frente o body e retorna uma resposta ao usuário

import { Request, Response } from 'express';
import { VendaService } from '../service/VendaService';
const vendaService = new VendaService();

export function realizarVenda(req: Request, res: Response) {
    try {
        const venda = vendaService.fazerVenda(req.body);
        return res.status(200).json({venda});
    } catch (error: any) {
        return res.status(400).json({ erro: error.message });
    }
}

export function recuperarVendaPorID(req:Request, res:Response) {
    try {
        const id = parseInt(req.params.id); 
        const venda = vendaService.consultarVenda(id);
        if(venda){
        res.status(200).json({
            mensagem:`Segue o registro da venda para o ID: ${id} 😊`,
            venda:venda
        });
        }else{
            res.status(400).json({mensagem:"Registro da venda não encontrado... 😞"});
        }
    } catch (error: any) {
        res.status(400).json({ erro: error.message});
    }
}
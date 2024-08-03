import { Request, Response } from "express";
import { ProductService } from "../service/ProductService";
import { Controller, Route, Tags, Body, Res, Post, TsoaResponse  } from "tsoa";
import { ProductRequestDto } from "../model/dto/ProductRequestDto";
import { BasicResponseDto } from "../model/dto/BasicResponseDto";

@Route("product")
@Tags("Product")
export class ProductController extends Controller {
    productService = new ProductService();

    @Post()
    async  cadastrarProduto (
        @Body() dto:ProductRequestDto,
        @Res() fail:TsoaResponse<400, BasicResponseDto>,
        @Res() sucess: TsoaResponse <201, BasicResponseDto>
    ): Promise < | void> {
        try {
            const product = await this.productService.cadastrarProduto(dto)
            return sucess(201, new BasicResponseDto("Produto criado com sucesso", product))
        } catch (error: any) {
            return fail (400, new BasicResponseDto(error.message, undefined))
        }
    }
    // async  cadastrarProduto (req: Request, res: Response){
    //     try {
    //         const novoProduto = await this.productService.cadastrarProduto(req.body);
    //         res.status(201).json(
    //             {
    //                 mensagem:"Produto adicionado com sucesso!",
    //                 produto:novoProduto
    //             }
    //         );
    //     } catch (error: any) {
    //         res.status(400).json({ message: error.message});
    //     }
    // };
    
    //  async  atualizarProduto (req: Request, res: Response){
    //     try {
    //         const produto = await this.productService.atualizarProduto(req.body);
    //         res.status(200).json(
    //             {
    //                 mensagem:"Produto atualizado com sucesso!",
    //                 produto:produto
    //             }
    //         );
    //     } catch (error: any) {
    //         res.status(400).json({ message: error.message});
    //     }
    // };
    
    //  async  deletarProduto (req: Request, res: Response){
    //     try {
    //         const produto = await this.productService.deletarProduto(req.body);
    //         res.status(200).json(
    //             {
    //                 mensagem:"Produto deletado com sucesso!",
    //                 produto:produto
    //             }
    //         );
    //     } catch (error: any) {
    //         res.status(400).json({ message: error.message});
    //     }
    // };
    
    //  async  filtrarProduto (req: Request, res: Response){
    //     try {
    //         const produto = await this.productService.filtrarProduto(req.query.id);
    //         res.status(200).json(
    //             {
    //                 mensagem:"Produto encontrado com sucesso!",
    //                 produto:produto
    //             }
    //         );
    //     } catch (error: any) {
    //         res.status(400).json({ message: error.message});
    //     }
    // };
    
    //  async  listarTodosProduto (req: Request, res: Response){
    //     try {
    //         const produtos = await this.productService.listarTodosProdutos();
    //         res.status(200).json(
    //             {
    //                 mensagem:"Produtos listados com sucesso!",
    //                 produtos:produtos
    //             }
    //             );
    //     } catch (error: any) {
    //         res.status(400).json({ message: error.message});
    //     }
    // };
}



 
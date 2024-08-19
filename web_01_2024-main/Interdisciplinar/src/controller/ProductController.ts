import { ProductService } from "../service/ProductService";
import { Controller, Route, Tags, Body, Query, Res, Post, Put, Delete, Get, TsoaResponse  } from "tsoa";
import { ProductRequestDto } from "../model/dto/ProductRequestDto";
import { BasicResponseDto } from "../model/dto/BasicResponseDto";

@Route("product")
@Tags("Product")
export class ProductController extends Controller {
    productService = new ProductService();

    /** 
        @example dto {
            "name": "Bananas",
            "price": 10,
            "expirationDate": "01/01/2025"
        }
    */ 
    @Post()
    async cadastrarProduto (
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


    /** 
        @example dto {
            "name": "Mangas",
            "price": 10,
            "expirationDate": "01/01/2025"
        }
    */ 
    @Put()
    async atualizarProduto (
        @Body() dto:ProductRequestDto,
        @Res() fail:TsoaResponse<400, BasicResponseDto>,
        @Res() sucess: TsoaResponse <201, BasicResponseDto>
    ): Promise < | void> {
        try {
            const product = await this.productService.atualizarProduto(dto)
            return sucess(201, new BasicResponseDto("Produto atualizado com sucesso!", product))
        } catch (error: any) {
            return fail (400, new BasicResponseDto(error.message, undefined))
        }
    }

    
    /** 
        @example dto {
            "name": "Mangas",
            "price": 10,
            "expirationDate": "01/01/2025"
        }
    */
    @Delete() 
    async deletarProduto (
        @Body() dto:ProductRequestDto,
        @Res() fail: TsoaResponse<400, BasicResponseDto>,
        @Res() sucess: TsoaResponse<201, BasicResponseDto>
    ): Promise < | void> {
        try {
            const product = await this.productService.deletarProduto(dto)
            return sucess(201, new BasicResponseDto("Produto deletado com sucesso!", product))
        } catch (error: any) {
            return fail (400, new BasicResponseDto(error.message, undefined))
        }
    }
    

    @Get()
    async filtrarProduto (
        @Query() id:number,
        @Res() fail: TsoaResponse<400, BasicResponseDto>,
        @Res() sucess: TsoaResponse<201, BasicResponseDto>
    ): Promise < | void> {
        try {
            const product = await this.productService.filtrarProduto(id)
            return sucess(201, new BasicResponseDto("Produto encontrado com sucesso!", product))
        } catch (error: any) {
            return fail (400, new BasicResponseDto(error.message, undefined))
        }
    }
    
    
    @Get("all")
    async listarTodosProdutos (
        // @Query() id:number,
        @Res() fail: TsoaResponse<400, BasicResponseDto>,
        @Res() sucess: TsoaResponse<201, BasicResponseDto>
    ): Promise < | void> {
        try {
            const product = await this.productService.listarTodosProdutos()
            return sucess(201, new BasicResponseDto("Produtos listados com sucesso!", product))
        } catch (error: any) {
            return fail (400, new BasicResponseDto(error.message, undefined))
        }
    }
}



 
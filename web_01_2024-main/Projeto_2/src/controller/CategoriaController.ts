
import { CategoriaService } from "../service/CategoriaService";
import { Controller, Route, Tags, Body, Query, Res, Post, Put, Delete, Get, TsoaResponse  } from "tsoa";
import { CategoriaRequestDto, CategoriaUpdateRequestDto } from "../model/dto/CategoriaRequestDto";
import { BasicResponseDto } from "../model/dto/BasicResponseDto";

@Route("livraria")
@Tags("Categoria")
export class CategoriaController extends Controller {
    categoriaService = new CategoriaService();

    /** 
        @example dto {
            "name": "Ficção Científica"
        }
    */ 
    @Post("categoria")
    async cadastrarCategoria (
        @Body() dto:CategoriaRequestDto,
        @Res() fail:TsoaResponse<400, BasicResponseDto>,
        @Res() success: TsoaResponse <201, BasicResponseDto>
    ): Promise < | void> {
        try {
            const categoria = await this.categoriaService.cadastrarCategoria(dto)
            return success(201, new BasicResponseDto("Categoria cadastrada com sucesso", categoria))
        } catch (error: any) {
            return fail (400, new BasicResponseDto(error.message, undefined))
        }
    }

    /** 
        @example dto {
            "id": 1,
            "name": "Mangá"
        }
    */ 
    @Put()
    async atualizarCategoria (
        @Body() dto:CategoriaUpdateRequestDto,
        @Res() fail:TsoaResponse<400, BasicResponseDto>,
        @Res() sucess: TsoaResponse <201, BasicResponseDto>
    ): Promise < | void> {
        try {
            const categoria = await this.categoriaService.atualizarCategoria(dto)
            return sucess(201, new BasicResponseDto("Categoria atualizada com sucesso!", categoria))
        } catch (error: any) {
            return fail (400, new BasicResponseDto(error.message, undefined))
        }
    }
}


    

    
    // /** 
    //     @example dto {
    //         "name": "Mangas",
    //         "price": 10,
    //         "expirationDate": "01/01/2025"
    //     }
    // */
    // @Delete() 
    // async deletarProduto (
    //     @Body() dto:ProductRequestDto,
    //     @Res() fail: TsoaResponse<400, BasicResponseDto>,
    //     @Res() sucess: TsoaResponse<201, BasicResponseDto>
    // ): Promise < | void> {
    //     try {
    //         const product = await this.productService.deletarProduto(dto)
    //         return sucess(201, new BasicResponseDto("Produto deletado com sucesso!", product))
    //     } catch (error: any) {
    //         return fail (400, new BasicResponseDto(error.message, undefined))
    //     }
    // }
    

    // @Get()
    // async filtrarProduto (
    //     @Query() id:number,
    //     @Res() fail: TsoaResponse<400, BasicResponseDto>,
    //     @Res() sucess: TsoaResponse<201, BasicResponseDto>
    // ): Promise < | void> {
    //     try {
    //         const product = await this.productService.filtrarProduto(id)
    //         return sucess(201, new BasicResponseDto("Produto encontrado com sucesso!", product))
    //     } catch (error: any) {
    //         return fail (400, new BasicResponseDto(error.message, undefined))
    //     }
    // }
    
    
    // @Get("all")
    // async listarTodosProdutos (
    //     // @Query() id:number,
    //     @Res() fail: TsoaResponse<400, BasicResponseDto>,
    //     @Res() sucess: TsoaResponse<201, BasicResponseDto>
    // ): Promise < | void> {
    //     try {
    //         const product = await this.productService.listarTodosProdutos()
    //         return sucess(201, new BasicResponseDto("Produtos listados com sucesso!", product))
    //     } catch (error: any) {
    //         return fail (400, new BasicResponseDto(error.message, undefined))
    //     }
    // }




 
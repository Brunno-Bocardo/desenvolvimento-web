
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
            return fail(400, new BasicResponseDto(error.message, undefined))
        }
    }


    /** 
        @example dto {
            "id": 1,
            "name": "Mangá"
        }
    */ 
    @Put("categoria")
    async atualizarCategoria (
        @Body() dto:CategoriaUpdateRequestDto,
        @Res() fail:TsoaResponse<400, BasicResponseDto>,
        @Res() success: TsoaResponse <201, BasicResponseDto>
    ): Promise < | void> {
        try {
            const categoria = await this.categoriaService.atualizarCategoria(dto)
            return success(201, new BasicResponseDto("Categoria atualizada com sucesso!", categoria))
        } catch (error: any) {
            return fail(400, new BasicResponseDto(error.message, undefined))
        }
    }


    @Get("categoria/all")
    async listarTodosProdutos (
        @Res() fail: TsoaResponse<400, BasicResponseDto>,
        @Res() success: TsoaResponse<201, BasicResponseDto>
    ): Promise < | void> {
        try {
            const product = await this.categoriaService.listarAllCategorias()
            return success(201, new BasicResponseDto("Categorias listadas com sucesso!", product))
        } catch (error: any) {
            return fail(400, new BasicResponseDto(error.message, undefined))
        }
    }


    /** 
        @example dto {
            "id": 1,
            "name": "Mangá"
        }
    */
    @Delete("categoria")
    async deletarCategoria(
        @Body() dto: CategoriaUpdateRequestDto,
        @Res() fail: TsoaResponse<400, { message: string }>,
        @Res() success: TsoaResponse<200, { message: string }>
    ): Promise<void> {
        try {
            await this.categoriaService.deletarCategoria(dto);
            return success(200, { message: "Categoria deletada com sucesso." });
        } catch (error: any) {
            return fail(400, { message: error.message });
        }
    }
}
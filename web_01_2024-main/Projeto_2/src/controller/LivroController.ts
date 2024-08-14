
import { LivroService } from "../service/LivroService";
import { Controller, Route, Tags, Body, Query, Res, Post, Put, Delete, Get, TsoaResponse  } from "tsoa";
import { LivroRequestDto, LivroAllRequestDto } from "../model/dto/LivroRequestDto";
import { BasicResponseDto } from "../model/dto/BasicResponseDto";

@Route("livraria")
@Tags("Livro")
export class LivroController extends Controller {
    livroService = new LivroService();

    /** 
        @example dto {
            "titulo": "One Piece",
            "autor": "Oda",
            "categoriaID": 2
        }
    */ 
    @Post("livro")
    async cadastrarLivro (
        @Body() dto:LivroRequestDto,
        @Res() fail:TsoaResponse<400, BasicResponseDto>,
        @Res() success: TsoaResponse <201, BasicResponseDto>
    ): Promise < | void> {
        try {
            const livro = await this.livroService.cadastrarLivro(dto)
            return success(201, new BasicResponseDto("Livro cadastrado com sucesso", livro))
        } catch (error: any) {
            return fail(400, new BasicResponseDto(error.message, undefined))
        }
    }


    /** 
        @example dto {
            "id": 1,
            "titulo": "One Piece",
            "autor": "Oda",
            "categoriaID": 2
        }
    */ 
    @Put("livro")
    async atualizarLivro (
        @Body() dto:LivroAllRequestDto,
        @Res() fail:TsoaResponse<400, BasicResponseDto>,
        @Res() success: TsoaResponse <201, BasicResponseDto>
    ): Promise < | void> {
        try {
            const livro = await this.livroService.atualizarLivro(dto)
            return success(201, new BasicResponseDto("Livro atualizado com sucesso!", livro))
        } catch (error: any) {
            return fail(400, new BasicResponseDto(error.message, undefined))
        }
    }


    // @Get("categoria/all")
    // async listarTodosProdutos (
    //     @Res() fail: TsoaResponse<400, BasicResponseDto>,
    //     @Res() sucess: TsoaResponse<201, BasicResponseDto>
    // ): Promise < | void> {
    //     try {
    //         const product = await this.categoriaService.listarAllLivros()
    //         return sucess(201, new BasicResponseDto("Livros listadas com sucesso!", product))
    //     } catch (error: any) {
    //         return fail(400, new BasicResponseDto(error.message, undefined))
    //     }
    // }
}
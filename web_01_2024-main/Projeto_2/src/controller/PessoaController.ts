import { PessoaService } from "../service/PessoaService";
import { Controller, Route, Tags, Body, Query, Res, Post, Put, Get, TsoaResponse } from "tsoa";
import { PessoaRequestDto, PessoaAllRequestDto } from "../model/dto/PessoaRequestDto";
import { BasicResponseDto } from "../model/dto/BasicResponseDto";

@Route("livraria")
@Tags("Pessoa")
export class PessoaController extends Controller {
    pessoaService = new PessoaService();

    /** 
        @example dto {
            "name": "Satoru Gojo",
            "email": "gojo.satoru@texto.com"
        }
    */ 
    @Post("pessoa")
    async cadastrarPessoa(
        @Body() dto: PessoaRequestDto,
        @Res() fail: TsoaResponse<400, BasicResponseDto>,
        @Res() success: TsoaResponse<201, BasicResponseDto>
    ): Promise< | void> {
        try {
            const pessoa = await this.pessoaService.cadastrarPessoa(dto);
            return success(201, new BasicResponseDto("Pessoa cadastrada com sucesso!", pessoa));
        } catch (error: any) {
            return fail(400, new BasicResponseDto(error.message, undefined));
        }
    }


    /** 
        @example dto {
            "id": 1,
            "name": "Satoru Gojo",
            "email": "foi.de.f@texto.com"
        }
    */ 
    @Put("pessoa")
    async atualizarPessoa(
        @Body() dto: PessoaAllRequestDto,
        @Res() fail: TsoaResponse<400, BasicResponseDto>,
        @Res() success: TsoaResponse<200, BasicResponseDto>
    ): Promise<void> {
        try {
            const pessoa = await this.pessoaService.atualizarPessoa(dto);
            return success(200, new BasicResponseDto("Pessoa atualizada com sucesso!", pessoa));
        } catch (error: any) {
            return fail(400, new BasicResponseDto(error.message, undefined));
        }
    }


    @Get("pessoa/email")
    async buscarPessoaPorEmail(
        @Query() email: string,
        @Res() fail: TsoaResponse<400, BasicResponseDto>,
        @Res() success: TsoaResponse<200, BasicResponseDto>
    ): Promise<void> {
        try {
            const pessoa = await this.pessoaService.buscarPessoaPorEmail(email);
            if (!pessoa) {
                return fail(400, new BasicResponseDto("Pessoa não encontrada", undefined));
            }
            return success(200, new BasicResponseDto("Pessoa encontrada com sucesso!", pessoa));
        } catch (error: any) {
            return fail(400, new BasicResponseDto(error.message, undefined));
        }
    }
}

import { Controller, Route, Tags, Body, Res, Post, TsoaResponse } from "tsoa";
import { EmprestimoRequestDto } from '../model/dto/EmprestimoRequestDto';
import { BasicResponseDto } from "../model/dto/BasicResponseDto";
import { EmprestimoService } from '../service/EmprestimoService';

@Route("livraria")
@Tags("Empréstimo")
export class EmprestimoController extends Controller {
    private emprestimoService: EmprestimoService;

    constructor() {
        super();
        this.emprestimoService = new EmprestimoService();
    }

    /**
        @example dto {
            "livroID": 1,
            "usuarioID": 1
        }
     */
    @Post("emprestimo")
    async registrarEmprestimo(
        @Body() dto: EmprestimoRequestDto,
        @Res() fail: TsoaResponse<400, BasicResponseDto>,
        @Res() success: TsoaResponse<201, BasicResponseDto>
    ): Promise<void> {
        try {
            const emprestimo = await this.emprestimoService.registrarEmprestimo(dto);
            return success(201, new BasicResponseDto("Aproveite a leitura", emprestimo));
        } catch (error: any) {
            return fail(400, new BasicResponseDto(error.message, undefined));
        }
    }
}

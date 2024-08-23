import { UsuarioService } from "../service/UsuarioService";
import { Controller, Route, Tags, Body, Query, Res, Post, Put, Get, Delete, TsoaResponse } from "tsoa";
import { UsuarioRequestDto, UsuarioAllRequestDto } from "../model/dto/UsuarioRequestDto"
import { BasicResponseDto } from "../model/dto/BasicResponseDto";

@Route("livraria")
@Tags("Usuário")
export class UsuarioController extends Controller {
    usuarioService = new UsuarioService();

    /**
       @example dto {
            "senha": "senhaSegura",
            "pessoaID": 1
       }
    */
    @Post("usuario")
    async cadastrarUsuario(
        @Body() dto: UsuarioRequestDto,
        @Res() fail: TsoaResponse<400, BasicResponseDto>,
        @Res() success: TsoaResponse<201, BasicResponseDto>
    ): Promise<void> {
        try {
            const usuario = await this.usuarioService.cadastrarUsuario(dto);
            return success(201, new BasicResponseDto("Usuário cadastrado com sucesso", usuario));
        } catch (error: any) {
            return fail(400, new BasicResponseDto(error.message, undefined));
        }
    }


    /**
       @example dto {
            "id": 1,
            "senha": "senhaSegura2?"
       }
    */
    @Put("usuario")
    async atualizarUsuario(
        @Body() dto: UsuarioAllRequestDto,
        @Res() fail: TsoaResponse<400, BasicResponseDto>,
        @Res() success: TsoaResponse<200, BasicResponseDto>
    ): Promise<void> {
        try {
            const usuario = await this.usuarioService.atualizarUsuario(dto);
            return success(200, new BasicResponseDto("Usuário atualizado com sucesso", usuario));
        } catch (error: any) {
            return fail(400, new BasicResponseDto(error.message, undefined));
        }
    }

    @Get("usuario/email")
    async buscarUsuarioPorEmail(
        @Query() email: string,
        @Res() fail: TsoaResponse<400, BasicResponseDto>,
        @Res() success: TsoaResponse<200, BasicResponseDto>
    ): Promise<void> {
        try {
            const usuario = await this.usuarioService.buscarUsuarioPorEmail(email);
            if (usuario) {
                return success(200, new BasicResponseDto("Usuário encontrado", usuario));
            } else {
                return fail(400, new BasicResponseDto("Usuário não encontrado", undefined));
            }
        } catch (error: any) {
            return fail(400, new BasicResponseDto(error.message, undefined));
        }
    }


    /**
       @example dto {
            "id": 1,
            "senha": "senhaSegura2?"
       }
    */
    @Delete("usuario")
    async deletarUsuario(
        @Body() dto: UsuarioAllRequestDto,
        @Res() fail: TsoaResponse<400, { message: string }>,
        @Res() success: TsoaResponse<200, { message: string }>
    ): Promise<void> {
        try {
            await this.usuarioService.deletarUsuario(dto);
            return success(200, { message: "Usuário deletado com sucesso." });
        } catch (error: any) {
            return fail(400, { message: error.message });
        }
    }
}

import { FichaService } from "../service/FichaService";
import { Controller, Route, Tags, Body, Query, Res, Post, Put, Delete, Get, TsoaResponse  } from "tsoa";
import { FichaRequestDto } from "../model/dto/FichaRequestDto";
import { FichaDto } from "../model/dto/FichaDto";
import { BasicResponseDto } from "../model/dto/BasicResponseDto";

@Route("ficha")
@Tags("Ficha")
export class FichaController extends Controller {
    fichaService = new FichaService();

    /** 
        @example dto {
            "petID": 1,
            "relatorio": "Ele tá bonzinho",
            "data_hora": "04/08/2024"
        }
    */ 
    @Post()
    async cadastrarFicha (
        @Body() dto:FichaRequestDto,
        @Res() fail:TsoaResponse<400, BasicResponseDto>,
        @Res() success: TsoaResponse <201, BasicResponseDto>
    ): Promise < | void> {
        try {
            const ficha = await this.fichaService.cadastrarFicha(dto)
            return success(201, new BasicResponseDto("Ficha criado com successo", ficha))
        } catch (error: any) {
            return fail (400, new BasicResponseDto(error.message, undefined))
        }
    }


    /** 
        @example dto {
            "id": 1,
            "petID": 1,
            "relatorio": "Ele tá bonzinho :D",
            "data_hora": "04/08/2024"
        }
    */ 
    @Put()
    async atualizarFicha (
        @Body() dto:FichaDto,
        @Res() fail:TsoaResponse<400, BasicResponseDto>,
        @Res() success: TsoaResponse <201, BasicResponseDto>
    ): Promise < | void> {
        try {
            const ficha = await this.fichaService.atualizarFicha(dto)
            return success(201, new BasicResponseDto("Ficha atualizada com successo!", ficha))
        } catch (error: any) {
            return fail (400, new BasicResponseDto(error.message, undefined))
        }
    }

    
    /** 
        @example dto {
            "id": 1,
            "petID": 1,
            "relatorio": "Ele tá bonzinho :D",
            "data_hora": "04/08/2024"
        }
    */
    @Delete() 
    async deletarFicha (
        @Body() dto:FichaDto,
        @Res() fail: TsoaResponse<400, BasicResponseDto>,
        @Res() success: TsoaResponse<201, BasicResponseDto>
    ): Promise < | void> {
        try {
            const ficha = await this.fichaService.deletarFicha(dto)
            return success(201, new BasicResponseDto("Ficha deletada com successo!", ficha))
        } catch (error: any) {
            return fail (400, new BasicResponseDto(error.message, undefined))
        }
    }
    
    
    @Get("all")
    async listarTodosFichas (
        // @Query() id:number,
        @Res() fail: TsoaResponse<400, BasicResponseDto>,
        @Res() success: TsoaResponse<201, BasicResponseDto>
    ): Promise < | void> {
        try {
            const ficha = await this.fichaService.listarTodosFichas()
            return success(201, new BasicResponseDto("Fichas listadas com successo!", ficha))
        } catch (error: any) {
            return fail (400, new BasicResponseDto(error.message, undefined))
        }
    }
}



 
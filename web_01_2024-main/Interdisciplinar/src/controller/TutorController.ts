import { TutorService } from "../service/TutorService";
import { Controller, Route, Tags, Body, Query, Res, Post, Put, Delete, Get, TsoaResponse  } from "tsoa";
import { TutorRequestDto } from "../model/dto/TutorRequestDto";
import { TutorDto } from "../model/dto/TutorDto";
import { BasicResponseDto } from "../model/dto/BasicResponseDto";

@Route("tutor")
@Tags("Tutor")
export class TutorController extends Controller {
    tutorService = new TutorService();

    /** 
        @example dto {
            "name": "Flavita",
            "telefone": "555-666",
            "email": "flavita@email.com",
            "cidade": "Boitucity",
            "bairro": "Boitu-Vera",
            "rua": "Boitu-rua",
            "numero": 27
        }
    */ 
    @Post()
    async cadastrarTutor (
        @Body() dto:TutorRequestDto,
        @Res() fail:TsoaResponse<400, BasicResponseDto>,
        @Res() success: TsoaResponse <201, BasicResponseDto>
    ): Promise < | void> {
        try {
            const tutor = await this.tutorService.cadastrarTutor(dto)
            return success(201, new BasicResponseDto("Tutor criado com successo", tutor))
        } catch (error: any) {
            return fail (400, new BasicResponseDto(error.message, undefined))
        }
    }


    /** 
        @example dto {
            "id": 1,
            "name": "Flavita",
            "telefone": "555-666",
            "email": "flavita@email.com",
            "cidade": "Boitucity",
            "bairro": "Boitu-Vera",
            "rua": "Boitu-rua",
            "numero": 27
        }
    */ 
    @Put()
    async atualizarTutor (
        @Body() dto:TutorDto,
        @Res() fail:TsoaResponse<400, BasicResponseDto>,
        @Res() success: TsoaResponse <201, BasicResponseDto>
    ): Promise < | void> {
        try {
            const tutor = await this.tutorService.atualizarTutor(dto)
            return success(201, new BasicResponseDto("Tutor atualizado com successo!", tutor))
        } catch (error: any) {
            return fail (400, new BasicResponseDto(error.message, undefined))
        }
    }

    
    /** 
        @example dto {
            "id": 1,
            "name": "Flavita",
            "telefone": "555-666",
            "email": "flavita@email.com",
            "cidade": "Boitucity",
            "bairro": "Boitu-Vera",
            "rua": "Boitu-rua",
            "numero": 27
        }
    */
    @Delete() 
    async deletarTutor (
        @Body() dto:TutorDto,
        @Res() fail: TsoaResponse<400, BasicResponseDto>,
        @Res() success: TsoaResponse<201, BasicResponseDto>
    ): Promise < | void> {
        try {
            const tutor = await this.tutorService.deletarTutor(dto)
            return success(201, new BasicResponseDto("Tutor deletado com successo!", tutor))
        } catch (error: any) {
            return fail (400, new BasicResponseDto(error.message, undefined))
        }
    }
    
    
    @Get("all")
    async listarTodosTutors (
        // @Query() id:number,
        @Res() fail: TsoaResponse<400, BasicResponseDto>,
        @Res() success: TsoaResponse<201, BasicResponseDto>
    ): Promise < | void> {
        try {
            const tutor = await this.tutorService.listarTodosTutors()
            return success(201, new BasicResponseDto("Tutores listadas com successo!", tutor))
        } catch (error: any) {
            return fail (400, new BasicResponseDto(error.message, undefined))
        }
    }
}



 
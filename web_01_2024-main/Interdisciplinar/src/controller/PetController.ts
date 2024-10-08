import { PetService } from "../service/PetService";
import { Controller, Route, Tags, Body, Query, Res, Post, Put, Delete, Get, TsoaResponse  } from "tsoa";
import { PetRequestDto } from "../model/dto/PetRequestDto";
import { PetDto } from "../model/dto/PetDto";
import { BasicResponseDto } from "../model/dto/BasicResponseDto";

@Route("pet")
@Tags("Pet")
export class PetController extends Controller {
    petService = new PetService();

    /** 
        @example dto {
            "name": "Linux",
            "idade": 10,
            "tutorID": 1,
            "peso": 8,
            "raca": "Vira-lata"
        }
    */ 
    @Post()
    async cadastrarPet (
        @Body() dto:PetRequestDto,
        @Res() fail:TsoaResponse<400, BasicResponseDto>,
        @Res() success: TsoaResponse <201, BasicResponseDto>
    ): Promise < | void> {
        try {
            const pet = await this.petService.cadastrarPet(dto)
            return success(201, new BasicResponseDto("Pet criado com successo", pet))
        } catch (error: any) {
            return fail (400, new BasicResponseDto(error.message, undefined))
        }
    }


    /** 
        @example dto {
            "id": 1,
            "name": "Linux",
            "idade": 9,
            "tutorID": 1,
            "peso": 8,
            "raca": "Vira-lata"
        }
    */ 
    @Put()
    async atualizarPet (
        @Body() dto:PetDto,
        @Res() fail:TsoaResponse<400, BasicResponseDto>,
        @Res() success: TsoaResponse <201, BasicResponseDto>
    ): Promise < | void> {
        try {
            const pet = await this.petService.atualizarPet(dto)
            return success(201, new BasicResponseDto("Pet atualizado com successo!", pet))
        } catch (error: any) {
            return fail (400, new BasicResponseDto(error.message, undefined))
        }
    }

    
    /** 
        @example dto {
            "id": 1,
            "name": "Linux",
            "idade": 9,
            "tutorID": 1,
            "peso": 8,
            "raca": "Vira-lata"
        }
    */
    @Delete() 
    async deletarPet (
        @Body() dto:PetDto,
        @Res() fail: TsoaResponse<400, BasicResponseDto>,
        @Res() success: TsoaResponse<201, BasicResponseDto>
    ): Promise < | void> {
        try {
            const pet = await this.petService.deletarPet(dto)
            return success(201, new BasicResponseDto("Pet deletado com successo!", pet))
        } catch (error: any) {
            return fail (400, new BasicResponseDto(error.message, undefined))
        }
    }
    
    
    @Get("all")
    async listarTodosPets (
        // @Query() id:number,
        @Res() fail: TsoaResponse<400, BasicResponseDto>,
        @Res() success: TsoaResponse<201, BasicResponseDto>
    ): Promise < | void> {
        try {
            const pet = await this.petService.listarTodosPets()
            return success(201, new BasicResponseDto("Pets listados com successo!", pet))
        } catch (error: any) {
            return fail (400, new BasicResponseDto(error.message, undefined))
        }
    }
}



 
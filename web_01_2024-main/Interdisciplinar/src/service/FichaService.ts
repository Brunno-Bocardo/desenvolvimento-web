import { Ficha } from "../model/entity/Ficha";
import { FichaRepository } from "../repository/FichaRepository";

export class FichaService{

    fichaRepository: FichaRepository = new FichaRepository();

    async cadastrarFicha(fichaData: any): Promise<Ficha> {
        const { petID, relatorio, data_hora } = fichaData;
        
        const ficha = Ficha.getInstance(undefined, petID, relatorio, data_hora) 

        const novoFicha =  await this.fichaRepository.insertFicha(ficha);
        console.log("Service - Insert ", novoFicha);
        return novoFicha;
    }

    async atualizarFicha(fichaData: any): Promise<Ficha> {
        const { id, petID, relatorio, data_hora  } = fichaData;

        const ficha = Ficha.getInstance(id, petID, relatorio, data_hora)

        await this.fichaRepository.updateFicha(ficha);
        console.log("Service - Update ", ficha);
        return ficha;
    }

    async deletarFicha(fichaData: any): Promise<Ficha> {
        const { id, petID, relatorio, data_hora } = fichaData;

        const ficha = Ficha.getInstance(id, petID, relatorio, data_hora)

        await this.fichaRepository.deleteFicha(ficha);
        console.log("Service - Delete ", ficha);
        return ficha; 
    }

    async filtrarFicha(fichaData: any): Promise<Ficha> {
        const idNumber = parseInt(fichaData, 10);

        const ficha =  await this.fichaRepository.filterFicha(idNumber);
        console.log("Service - Filtrar", ficha);
        return ficha;
    }

    async listarTodosFichas(): Promise<Ficha[]> {
        const ficha =  await this.fichaRepository.filterAllFicha();
        console.log("Service - Filtrar Todos", ficha);
        return ficha;
    }

}
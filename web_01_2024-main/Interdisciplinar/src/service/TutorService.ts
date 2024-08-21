import { Tutor } from "../model/entity/Tutor";
import { TutorRepository } from "../repository/TutorRepository";

export class TutorService{

    tutorRepository: TutorRepository = new TutorRepository();

    async cadastrarTutor(tutorData: any): Promise<Tutor> {
        const { name, telefone, email, cidade, bairro, rua, numero } = tutorData;
        
        const tutor = Tutor.getInstance(undefined, name, telefone, email, cidade, bairro, rua, numero) 

        const novoTutor =  await this.tutorRepository.insertTutor(tutor);
        console.log("Service - Insert ", novoTutor);
        return novoTutor;
    }

    async atualizarTutor(tutorData: any): Promise<Tutor> {
        const { id, name, telefone, email, cidade, bairro, rua, numero } = tutorData;
        const idNumber = parseInt(id, 10);

        const tutor = Tutor.getInstance(idNumber, name, telefone, email, cidade, bairro, rua, numero)

        const TutorExiste = await this.tutorRepository.filterTutor(tutor.id)
        if(TutorExiste.length == 0){
            throw new Error("Tutor não encontrado");
        }

        await this.tutorRepository.updateTutor(tutor);
        console.log("Service - Update ", tutor);
        return tutor;
    }

    async deletarTutor(tutorData: any): Promise<Tutor> {
        const { id, name, telefone, email, cidade, bairro, rua, numero } = tutorData;
        const idNumber = parseInt(id, 10);

        const tutor = Tutor.getInstance(idNumber, name, telefone, email, cidade, bairro, rua, numero)

        const TutorExiste = await this.tutorRepository.filterTutor(tutor.id)
        if(TutorExiste.length == 0){
            throw new Error("Tutor não encontrado");
        }

        await this.tutorRepository.deleteTutor(tutor);
        console.log("Service - Delete ", tutor);
        return tutor; 
    }

    async filtrarTutor(tutorData: any): Promise<Tutor[]> {
        const idNumber = parseInt(tutorData, 10);

        const tutor =  await this.tutorRepository.filterTutor(idNumber);
        console.log("Service - Filtrar", tutor);
        return tutor;
    }

    async listarTodosTutors(): Promise<Tutor[]> {
        const tutor =  await this.tutorRepository.filterAllTutor();
        console.log("Service - Filtrar Todos", tutor);
        return tutor;
    }

}
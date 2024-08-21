import { Pet } from "../model/entity/Pet";
import { PetRepository } from "../repository/PetRepository";

export class PetService{

    petRepository: PetRepository = new PetRepository();

    async cadastrarPet(petData: any): Promise<Pet> {
        const { name, idade, tutorID, peso, raca } = petData;
        
        const pet = Pet.getInstance(undefined, name, idade, tutorID, peso, raca) 

        const novoPet =  await this.petRepository.insertPet(pet);
        console.log("Service - Insert ", novoPet);
        return novoPet;
    }

    async atualizarPet(petData: any): Promise<Pet> {
        const { id, name, idade, tutorID, peso, raca  } = petData;
        const idNumber = parseInt(id, 10);

        const pet = Pet.getInstance(idNumber, name, idade, tutorID, peso, raca)

        const PetExiste = await this.petRepository.filterPet(pet.id)
        if(PetExiste.length == 0){
            throw new Error("Pet não encontrado!");
        }

        await this.petRepository.updatePet(pet);
        console.log("Service - Update ", pet);
        return pet;
    }

    async deletarPet(petData: any): Promise<Pet> {
        const { id, name, idade, tutorID, peso, raca } = petData;
        const idNumber = parseInt(id, 10);

        const pet = Pet.getInstance(idNumber, name, idade, tutorID, peso, raca)

        const PetExiste = await this.petRepository.filterPet(pet.id)
        if(PetExiste.length == 0){
            throw new Error("Pet não encontrado!");
        }

        await this.petRepository.deletePet(pet);
        console.log("Service - Delete ", pet);
        return pet; 
    }

    async filtrarPet(petData: any): Promise<Pet[]> {
        const idNumber = parseInt(petData, 10);

        const pet =  await this.petRepository.filterPet(idNumber);
        console.log("Service - Filtrar", pet);
        return pet;
    }

    async listarTodosPets(): Promise<Pet[]> {
        const pet =  await this.petRepository.filterAllPet();
        console.log("Service - Filtrar Todos", pet);
        return pet;
    }

}
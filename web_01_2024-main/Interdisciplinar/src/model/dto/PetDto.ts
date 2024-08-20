export class PetDto {
    id: number;
    name: string;
    idade: number;
    tutorID: number;
    peso: number;
    raca: string;

    private constructor(id: number, name: string, idade: number, tutorID: number, peso: number, raca: string) {
        this.id = id;
        this.name = name;
        this.idade = idade;
        this.tutorID = tutorID;
        this.peso = peso;
        this.raca = raca;
    }
}
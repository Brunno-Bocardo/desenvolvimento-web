export class PetRequestDto {
    name: string;
    idade: number;
    tutorID: number;
    peso: number;
    raca: string;

    private constructor(name: string, idade: number, tutorID: number, peso: number, raca: string) {
        this.name = name;
        this.idade = idade;
        this.tutorID = tutorID;
        this.peso = peso;
        this.raca = raca;
    }
}
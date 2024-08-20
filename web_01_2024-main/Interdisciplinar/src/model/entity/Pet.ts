export class Pet {
    private static instance: Pet | null = null;
    id: number;
    name: string;
    idade: number;
    tutorID: number;
    peso: number;
    raca: string;

    private constructor(id: number, name: string, idade: number, tutorID: number, peso: number, raca: string) {
        this.validatesInformation(name, idade, tutorID, peso, raca);
        this.id = id;
        this.name = name;
        this.idade = idade;
        this.tutorID = tutorID;
        this.peso = peso;
        this.raca = raca;
    }

    public static getInstance(id: number, name: string, idade: number, tutorID: number, peso: number, raca: string): Pet {
        if (!Pet.instance) {
            Pet.instance = new Pet(id, name, idade, tutorID, peso, raca);
        } else {
            Pet.instance.id = id || Pet.instance.id;
            Pet.instance.name = name || Pet.instance.name;
            Pet.instance.idade = idade || Pet.instance.idade;
            Pet.instance.tutorID = tutorID || Pet.instance.tutorID;
            Pet.instance.peso = peso || Pet.instance.peso;
            Pet.instance.raca = raca || Pet.instance.raca;
        }
        return Pet.instance;
    }

    private validatesInformation(name: string, idade: number, tutorID: number, peso: number, raca: string) {
        let error = '';

        if (typeof name !== 'string' || typeof idade !== 'number' || typeof tutorID !== 'number' || typeof peso !== 'number' || typeof raca !== 'string') {
            error += "Informações incompletas ou incorretas.";
        }

        if (error !== '') {
            throw new Error(error);
        }
    }
}




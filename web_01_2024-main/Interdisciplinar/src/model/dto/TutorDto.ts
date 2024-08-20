export class TutorDto {
    id: number;
    name: string;
    telefone: string;
    email: string;
    cidade: string;
    bairro: string;
    rua: string;
    numero: number;

    private constructor(id: number = 0, name: string = '', telefone: string = '', email: string = '', cidade: string = '', bairro: string = '', rua: string = '', numero: number = 0) {
        this.id = id;
        this.name = name;
        this.telefone = telefone;
        this.email = email;
        this.cidade = cidade;
        this.bairro = bairro;
        this.rua = rua;
        this.numero = numero;
    }
}
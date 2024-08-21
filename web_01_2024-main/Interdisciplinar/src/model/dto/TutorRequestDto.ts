export class TutorRequestDto {
    name: string;
    telefone: string;
    email: string;
    cidade: string;
    bairro: string;
    rua: string;
    numero: number;

    private constructor(name: string = '', telefone: string = '', email: string = '', cidade: string = '', bairro: string = '', rua: string = '', numero: number = 0) {
        this.name = name;
        this.telefone = telefone;
        this.email = email;
        this.cidade = cidade;
        this.bairro = bairro;
        this.rua = rua;
        this.numero = numero;
    }
}
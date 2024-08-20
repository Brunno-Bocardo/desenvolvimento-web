export class Tutor {
    private static instance: Tutor | null = null;
    id: number;
    name: string;
    telefone: string;
    email: string;
    cidade: string;
    bairro: string;
    rua: string;
    numero: number;

    private constructor(id: number = 0, name: string = '', telefone: string = '', email: string = '', cidade: string = '', bairro: string = '', rua: string = '', numero: number = 0) {
        this.validatesInformation(name, telefone, email, cidade, bairro, rua);
        this.id = id;
        this.name = name;
        this.telefone = telefone;
        this.email = email;
        this.cidade = cidade;
        this.bairro = bairro;
        this.rua = rua;
        this.numero = numero;
    }

    public static getInstance(id: number = 0, name: string = '', telefone: string = '', email: string = '', cidade: string = '', bairro: string = '', rua: string = '', numero: number = 0): Tutor {
        if (!Tutor.instance) {
            Tutor.instance = new Tutor(id, name, telefone, email, cidade, bairro, rua, numero);
        } else {
            Tutor.instance.id = id || Tutor.instance.id;
            Tutor.instance.name = name || Tutor.instance.name;
            Tutor.instance.telefone = telefone || Tutor.instance.telefone;
            Tutor.instance.email = email || Tutor.instance.email;
            Tutor.instance.cidade = cidade || Tutor.instance.cidade;
            Tutor.instance.bairro = bairro || Tutor.instance.bairro;
            Tutor.instance.rua = rua || Tutor.instance.rua;
            Tutor.instance.numero = numero || Tutor.instance.numero;
        }
        return Tutor.instance;
    }

    private validatesInformation(name: string, telefone: string, email: string, cidade: string, bairro: string, rua: string) {
        let error = '';

        if (typeof name !== 'string' || typeof telefone !== 'string' || typeof email !== 'string' || typeof cidade !== 'string' || typeof bairro !== 'string' || typeof rua !== 'string') {
            error += "Informações incompletas ou incorretas. ";
        }

        if (error !== '') {
            throw new Error(error);
        }
    }
}

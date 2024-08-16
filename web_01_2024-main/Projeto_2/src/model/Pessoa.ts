export class Pessoa {
    private static instance: Pessoa;

    id: number;
    name: string;
    email: string;

    private constructor(id?: number, name?: string, email?: string) {
        this.id = id || 0;
        this.name = name || '';
        this.email = email || '';
        this.validatesInformation(name, email);
    }

    public static getInstance(id?: number, name?: string, email?: string): Pessoa {
        if (!Pessoa.instance) {
            Pessoa.instance = new Pessoa(id, name, email);
        }
        return Pessoa.instance;
    }

    private validatesInformation(name: any, email: any) {
        let error = '';

        // Verificação de tipo
        if (typeof name !== 'string' || typeof email !== 'string') {
            error += 'Nome e email devem ser do tipo string. ';
        }

        // Verificação do formato do email
        const emailRegex = /^[^\s@]+@[^\s@]+\.com(\.br)?$/;
        if (!emailRegex.test(email)) {
            error += 'O email deve ter o formato texto@texto.com ou texto@texto.com.br. ';
        }

        if (error !== '') {
            throw new Error(error);
        }
    }
}

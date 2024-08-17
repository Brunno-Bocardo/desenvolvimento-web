export class Usuario {
    id: number;
    pessoaID: number;
    senha: string;

    private static instance: Usuario;

    private constructor(id?: number, pessoaID?: number, senha?: string) {
        this.id = id || 0;
        this.pessoaID = pessoaID || 0;
        this.senha = senha || '';
    }

    public static getInstance(id?: number, pessoaID?: number, senha?: string): Usuario {
        if (!Usuario.instance) {
            Usuario.instance = new Usuario(id, pessoaID, senha);
        } else {
            Usuario.instance.id = id || Usuario.instance.id;
            Usuario.instance.pessoaID = pessoaID || Usuario.instance.pessoaID
            Usuario.instance.senha = senha || Usuario.instance.senha; 
        }
        return Usuario.instance;
    }
}

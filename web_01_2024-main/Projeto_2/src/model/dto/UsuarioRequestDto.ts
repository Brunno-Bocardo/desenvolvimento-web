export class UsuarioRequestDto {
    pessoaID: number;
    senha: string;

    constructor(senha:string, pessoaID:number) {
        this.pessoaID = pessoaID;
        this.senha = senha
    }
}

export class UsuarioAllRequestDto {
    id:number;
    senha: string;

    constructor(id:number, senha:string) {
        this.id = id;
        this.senha = senha
    }
}
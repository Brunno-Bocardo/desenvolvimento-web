import { Pessoa } from "./Pessoa";

export class Usuario extends Pessoa{
    pessoaID: number;
    senha: string;

    constructor(id?:number, name?:string, email?:string, pessoaID?:number, senha?:string){
        super(id, name, email)
        this.id = id || 0;
        this.pessoaID = pessoaID || 0;
        this.senha = senha || '';
    }
}
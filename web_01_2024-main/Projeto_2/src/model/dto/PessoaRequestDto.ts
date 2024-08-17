export class PessoaRequestDto {
    name: string;
    email: string;

    constructor(email:string, name:string) {
        this.name = name;
        this.email = email
    }
}

export class PessoaAllRequestDto {
    id:number;
    email: string;
    name: string;

    constructor(id:number, name:string, email:string) {
        this.id = id;
        this.name = name;
        this.email = email
    }
}
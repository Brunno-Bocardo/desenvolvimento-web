
export class CategoriaRequestDto {
    name: string;

    constructor(name:string) {
        this.name = name;
    }
}

export class CategoriaUpdateRequestDto {
    id: number;
    name: string;

    constructor(name:string, id:number) {
        this.name = name;
        this.id = id;
    }
}
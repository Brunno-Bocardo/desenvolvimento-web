
export class LivroRequestDto {
    autor: string;
    titulo: string;
    categoriaID: number;

    constructor(titulo:string, autor:string, categoriaID:number) {
        this.autor = autor;
        this.titulo = titulo
        this.categoriaID = categoriaID
    }
}

export class LivroAllRequestDto {
    id:number;
    titulo: string;
    autor: string;
    categoriaID: number;

    constructor(id:number, autor:string, titulo:string, categoriaID:number) {
        this.id = id;
        this.autor = autor;
        this.titulo = titulo
        this.categoriaID = categoriaID
    }
}
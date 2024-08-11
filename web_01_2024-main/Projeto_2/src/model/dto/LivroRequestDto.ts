
export class LivroRequestDto {
    autor: string;
    titulo: string;
    categoriaID: number;

    constructor(autor:string, titulo:string, categoriaID:number) {
        this.autor = autor;
        this.titulo = titulo
        this.categoriaID = categoriaID
    }
}

export class LivroAllRequestDto {
    id:number;
    autor: string;
    titulo: string;
    categoriaID: number;

    constructor(id:number, autor:string, titulo:string, categoriaID:number) {
        this.id = id;
        this.autor = autor;
        this.titulo = titulo
        this.categoriaID = categoriaID
    }
}
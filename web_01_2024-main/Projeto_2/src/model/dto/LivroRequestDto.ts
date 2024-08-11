
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

// export class CategoriaUpdateRequestDto {
//     id: number;
//     name: string;

//     constructor(name:string, id:number) {
//         this.name = name;
//         this.id = id;
//     }
// }
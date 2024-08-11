
export class Livro{
    id: number;
    titulo: string;
    autor: string;
    categoriaID: string;

    constructor(id?:number, titulo?:string, categoriaID?:string, autor?:string){
        this.id = id || 0;
        this.titulo = titulo || '';
        this.autor = autor || '';
        this.categoriaID = categoriaID || '';
    }

}
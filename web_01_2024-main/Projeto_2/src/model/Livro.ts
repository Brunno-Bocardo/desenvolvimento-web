
export class Livro{
    id: number;
    titulo: string;
    autor: string;
    categoriaID: number;

    constructor(id?:number, titulo?:string, autor?:string, categoriaID?:number){
        this.id = id || 0;
        this.titulo = titulo || '';
        this.autor = autor || '';
        this.categoriaID = categoriaID || 0;
        this.validatesInformation(titulo, autor);
    }

    private validatesInformation(titulo:any, autor:any){
        let error ='';

        if (typeof titulo !== 'string' || typeof autor !== 'string') {
            error += ("Informações incompletas ou incorretas." + titulo + autor);
        }

        if(error != ''){
            throw new Error(error);
        }
    }
}
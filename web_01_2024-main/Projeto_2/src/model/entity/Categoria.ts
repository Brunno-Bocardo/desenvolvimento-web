
export class Categoria{
    private static instance: Categoria;

    id: number;
    name: string;

    constructor(id?:number, name?:string){
        this.id = id || 0;
        this.name = name || '';
        this.validatesInformation(name);
    }

    public static getInstance(id?: number, name?: string): Categoria {
        if (!Categoria.instance) {
            Categoria.instance = new Categoria(id, name);
        } else {
            Categoria.instance.id = id || Categoria.instance.id;
            Categoria.instance.name = name || Categoria.instance.name;
        }
        return Categoria.instance;
    }

    private validatesInformation(name:any){
        let error ='';

        if (typeof name !== 'string') {
            error += ("Informações incompletas ou incorretas. ");
        }

        if(error != ''){
            throw new Error(error);
        }
    }
}
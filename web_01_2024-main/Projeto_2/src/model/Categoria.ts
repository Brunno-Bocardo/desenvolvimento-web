// import { stringParaData, verificaFormatoData } from "../util/DataUtil";

export class Categoria{
    id: number;
    name: string;

    constructor(id?:number, name?:string){
        this.validatesInformation(name);
        this.id = id || 0;
        this.name = name || '';
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
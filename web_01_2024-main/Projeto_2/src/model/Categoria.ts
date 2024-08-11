// import { stringParaData, verificaFormatoData } from "../util/DataUtil";

export class Categoria{
    id: number;
    name: string;

    constructor(id?:number, name?:string){
        this.id = id || 0;
        this.name = name || '';
    }

    // private validatesInformation(name:any, price:any, expirationDate:any){
    //     let error ='';
    //     if (typeof name !== 'string' || typeof price !== 'number' || typeof expirationDate !== 'string') {
    //         error += ("Informações incompletas ou incorretas. ");
    //     }

    //     if(!verificaFormatoData(expirationDate)){
    //         error += ("A data deve possuir o formato: dd/MM/yyyy");
    //     }

    //     if(error != ''){
    //         throw new Error(error);
    //     }
    // }
}
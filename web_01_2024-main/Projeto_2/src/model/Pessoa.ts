// import { stringParaData, verificaFormatoData } from "../util/DataUtil";

export class Pessoa{
    id: number;
    name: string;
    email: string;

    constructor(id?:number, name?:string, email?:string){
        this.id = id || 0;
        this.name = name || '';
        this.email = email || '';
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
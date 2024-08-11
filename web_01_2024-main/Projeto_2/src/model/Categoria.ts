// import { stringParaData, verificaFormatoData } from "../util/DataUtil";

export class Categoria{
    id: number;
    name: string;

    constructor(id?:number, name?:string){
        this.id = id || 0;
        this.name = name || '';
    }

}
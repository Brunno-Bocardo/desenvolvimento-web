import { stringParaData, verificaFormatoData } from "../util/DataUtil";

export class Emprestimo{
    id: number;
    livroID: number;
    usuarioID: number;
    dataEmprestimo: Date;
    dataDevolucao: Date;

    constructor(id?:number, livroID?:number, usuarioID?:number, dataEmprestimo?:string, dataDevolucao?:string,){
        this.validatesInformation(dataEmprestimo, dataDevolucao);
        this.id = id || 0;
        this.livroID = livroID || 0;
        this.usuarioID = usuarioID || 0;
        this.dataEmprestimo = stringParaData(dataEmprestimo || '');
        this.dataDevolucao = stringParaData(dataDevolucao || '');
    }

    private validatesInformation(dataEmprestimo:any, dataDevolucao:any){
        let error ='';

        if(!verificaFormatoData(dataEmprestimo || dataDevolucao)){
            error += ("A data deve possuir o formato: dd/MM/yyyy");
        }

        if(error != ''){
            throw new Error(error);
        }
    }
}
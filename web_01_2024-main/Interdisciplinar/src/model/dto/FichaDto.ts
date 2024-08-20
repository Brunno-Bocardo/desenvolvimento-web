export class FichaDto {
    id: number;
    petID: number;
    relatorio: string;
    data_hora: Date;

    private constructor(id: number, petID: number, relatorio: string, data_hora: Date) {  
        this.id = id;
        this.petID = petID;
        this.relatorio = relatorio;
        this.data_hora = data_hora; 
    }
}
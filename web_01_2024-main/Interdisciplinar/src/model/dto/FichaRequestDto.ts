
export class FichaRequestDto {
    petID: number;
    relatorio: string;
    data_hora: Date;

    private constructor(petID: number, relatorio: string, data_hora: Date) {
        this.petID = petID;
        this.relatorio = relatorio;
        this.data_hora = data_hora; 
    }
}
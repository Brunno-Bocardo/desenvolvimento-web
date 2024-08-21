
export class FichaRequestDto {
    petID: number;
    relatorio: string;
    data_hora: string;

    private constructor(petID: number, relatorio: string, data_hora: string) {
        this.petID = petID;
        this.relatorio = relatorio;
        this.data_hora = data_hora; 
    }
}
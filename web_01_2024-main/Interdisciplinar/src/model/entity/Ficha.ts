export class Ficha {
    private static instance: Ficha | null = null;
    id: number;
    petID: number;
    relatorio: string;
    data_hora: Date;

    private constructor(id: number, petID: number, relatorio: string, data_hora: Date) {
        this.validatesInformation(petID, relatorio);
        this.id = id;
        this.petID = petID;
        this.relatorio = relatorio;
        this.data_hora = data_hora; 
    }

    public static getInstance(id: number, petID: number, relatorio: string, data_hora: Date): Ficha {
        if (!Ficha.instance) {
            Ficha.instance = new Ficha(id, petID, relatorio, data_hora);
        } else {
            Ficha.instance.id = id || Ficha.instance.id;
            Ficha.instance.petID = petID || Ficha.instance.petID;
            Ficha.instance.relatorio = relatorio || Ficha.instance.relatorio;
            Ficha.instance.data_hora = data_hora || Ficha.instance.data_hora;
        }
        return Ficha.instance;
    }

    private validatesInformation(petID: number, relatorio: string) {
        let error = '';

        if (typeof petID !== 'number' || typeof relatorio !== 'string') {
            error += "Informações incompletas ou incorretas. ";
        }

        if (error !== '') {
            throw new Error(error);
        }
    }
}

import { stringParaData } from "../../util/DataUtil";

export class Ficha {
    private static instance: Ficha | null = null;
    id: number;
    petID: number;
    relatorio: string;
    data_hora: Date;

    private constructor(id?: number, petID?: number, relatorio?: string, data_hora?: string) {
        this.validatesInformation(petID, relatorio);
        this.id = id || 0;
        this.petID = petID || 0;
        this.relatorio = relatorio || '';
        this.data_hora = stringParaData(data_hora || ''); 
    }

    public static getInstance(id?: number, petID?: number, relatorio?: string, data_hora?: string): Ficha {
        if (!Ficha.instance) {
            Ficha.instance = new Ficha(id, petID, relatorio);
        } else {
            Ficha.instance.id = id || Ficha.instance.id;
            Ficha.instance.petID = petID || Ficha.instance.petID;
            Ficha.instance.relatorio = relatorio || Ficha.instance.relatorio;
            Ficha.instance.data_hora = stringParaData(data_hora || '') || Ficha.instance.data_hora;
        }
        return Ficha.instance;
    }

    private validatesInformation(petID?: number, relatorio?: string) {
        let error = '';

        if (typeof petID !== 'number' || typeof relatorio !== 'string') {
            error += "Informações incompletas ou incorretas. ";
        }

        if (error !== '') {
            throw new Error(error);
        }
    }
}

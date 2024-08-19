import { DateTime } from "luxon";  // Usando a biblioteca luxon para manipulação de datas

export class Ficha {
    private static instance: Ficha | null = null;
    id: number;
    petID: number;
    relatorio: string;
    data_hora: DateTime;

    private constructor(id: number, petID: number, relatorio: string, data_hora: DateTime) {
        this.validatesInformation(petID, relatorio);
        this.id = id;
        this.petID = petID;
        this.relatorio = relatorio;
        this.data_hora = data_hora;  // Inicializando data_hora
    }

    public static getInstance(id: number, petID: number, relatorio: string, data_hora: DateTime): Ficha {
        if (!Ficha.instance) {
            Ficha.instance = new Ficha(id, petID, relatorio, data_hora);
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

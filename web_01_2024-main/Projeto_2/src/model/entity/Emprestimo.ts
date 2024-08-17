export class Emprestimo {
    id: number;
    livroID: number;
    usuarioID: number;
    dataEmprestimo: Date;
    dataDevolucao: Date;

    private static instance: Emprestimo;

    constructor(id?: number, livroID?: number, usuarioID?: number, dataEmprestimo?: Date, dataDevolucao?: Date) {
        this.id = id || 0;
        this.livroID = livroID || 0;
        this.usuarioID = usuarioID || 0;
        this.dataEmprestimo = dataEmprestimo || new Date();
        this.dataDevolucao = this.calculaDataDevolucao(this.dataEmprestimo);
    }
    

    public static getInstance(id?: number, livroID?: number, usuarioID?: number, dataEmprestimo?: Date, dataDevolucao?: Date): Emprestimo {
        if (!Emprestimo.instance) {
            Emprestimo.instance = new Emprestimo(id, livroID, usuarioID, dataEmprestimo, dataDevolucao);
        } else {
            if (id !== undefined) Emprestimo.instance.id = id;
            if (usuarioID !== undefined) Emprestimo.instance.usuarioID = usuarioID;
            if (livroID !== undefined) Emprestimo.instance.livroID = livroID;
            if (dataEmprestimo !== undefined) Emprestimo.instance.dataEmprestimo = dataEmprestimo;
            if (dataDevolucao !== undefined) Emprestimo.instance.dataDevolucao = dataDevolucao;
        }
        return Emprestimo.instance;
    }    

    
    private calculaDataDevolucao(dataEmprestimo: Date): Date {
        const data = new Date(dataEmprestimo);
        data.setDate(data.getDate() + 7);
        return data;
    }
}

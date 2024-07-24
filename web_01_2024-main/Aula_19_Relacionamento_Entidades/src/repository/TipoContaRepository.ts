import { executarComandoSQL } from "../database/mysql";
import { TipoConta } from "../model/TipoConta"

export class TipoContaRepository {
    constructor() {
        this.createTable()
    }

    private async createTable() {
        const query = `
        CREATE TABLE tipos_conta (
            id INT AUTO_INCREMENT PRIMARY KEY ,
            descricao VARCHAR (255) ,
            codigo_tipo_conta VARCHAR (50) UNIQUE
            ) ;
        `

        try {
            const resultado =  await executarComandoSQL(query, []);
            console.log('Query executada com sucesso:', resultado);
        } catch (err) {
            console.error('Error');
        }
    }

    async insertTipoDeConta(descricao:string, codigoTipoConta:number): Promise<any> {
        const valores = [descricao, codigoTipoConta]
        const query = `
            INSERT INTO banco.tipos_conta (descricao, codigo_tipo_conta)
            VALUES (?, ?);
        `

        try {
            const result = await executarComandoSQL(query, valores)
            if (result) {
                const newTipoDeConta = new TipoConta(result.insertId, descricao, codigoTipoConta)
                return new Promise<TipoConta>((resolve) => {
                    resolve(newTipoDeConta)
                })
            }
        } catch (err) {
            throw err
        }
    }
}
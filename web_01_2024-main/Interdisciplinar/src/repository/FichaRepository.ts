import { executarComandoSQL } from "../database/mysql";
import { Ficha } from "../model/entity/Ficha";




export class FichaRepository{


    constructor(){
        this.createTable();
    }


    private async createTable() {
        const query = `
        CREATE TABLE IF NOT EXISTS caokimia.Ficha (
            id INT AUTO_INCREMENT PRIMARY KEY,
            petID INT NOT NULL,
            relatorio VARCHAR(255) NOT NULL,
            data_hora DATE NOT NULL,
            FOREIGN KEY (petID) REFERENCES Pet (id)
        )`;


        try {
            const resultado =  await executarComandoSQL(query, []);
            console.log('Query executada com sucesso:', resultado);
        } catch (err) {
            console.error('Error');
        }
    }


    async insertFicha(ficha: Ficha) :Promise<Ficha>{
        const query = "INSERT INTO caokimia.Ficha (petID, relatorio, data_hora) VALUES (?, ?, ?)" ;


        try {
            const resultado = await executarComandoSQL(query, [ficha.petID, ficha.relatorio, ficha.data_hora]);
            console.log('Ficha inserido com sucesso, ID: ', resultado.insertId);
            ficha.id = resultado.insertId;
            return new Promise<Ficha>((resolve)=>{
                resolve(ficha);
            })
        } catch (err) {
            console.error('Erro ao inserir ficha do Pet:', err);
            throw err;
        }
    }


    async updateFicha(ficha:Ficha) :Promise<Ficha>{
        const query = "UPDATE caokimia.Ficha set petID = ?, relatorio = ?, data_hora = ? where id = ?;" ;


        try {
            const resultado = await executarComandoSQL(query, [ficha.petID, ficha.relatorio, ficha.data_hora, ficha.id]);
            console.log('Ficha atualizada com sucesso, ID: ', resultado);
            return new Promise<Ficha>((resolve)=>{
                resolve(ficha);
            })
        } catch (err:any) {
            console.error(`Erro ao atualizar o ficha de ID ${ficha.id} gerando o erro: ${err}`);
            throw err;
        }
    }


    async deleteFicha(ficha:Ficha) :Promise<Ficha>{
        const query = "DELETE FROM caokimia.Ficha where id = ?;" ;


        try {
            const resultado = await executarComandoSQL(query, [ficha.id]);
            console.log('Ficha deletado com sucesso: ', ficha);
            return new Promise<Ficha>((resolve)=>{
                resolve(ficha);
            })
        } catch (err:any) {
            console.error(`Falha ao deletar a ficha de ID ${ficha.id} gerando o erro: ${err}`);
            throw err;
        }
    }


    async filterFicha(id: number) :Promise<Ficha>{
        const query = "SELECT * FROM caokimia.Ficha where id = ?" ;


        try {
            const resultado = await executarComandoSQL(query, [id]);
            console.log('Ficha localizado com sucesso, ID: ', resultado);
            return new Promise<Ficha>((resolve)=>{
                resolve(resultado);
            })
        } catch (err:any) {
            console.error(`Falha ao procurar o Ficha de ID ${id} gerando o erro: ${err}`);
            throw err;
        }
    }


    async filterAllFicha() :Promise<Ficha[]>{
        const query = "SELECT * FROM caokimia.Ficha" ;


        try {
            const resultado = await executarComandoSQL(query, []);
            return new Promise<Ficha[]>((resolve)=>{
                resolve(resultado);
            })
        } catch (err:any) {
            console.error(`Falha ao listar os Fichas gerando o erro: ${err}`);
            throw err;
        }
    }


}

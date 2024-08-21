import { executarComandoSQL } from "../database/mysql";
import { Tutor } from "../model/entity/Tutor";


export class TutorRepository{

    constructor(){
        this.createTable();
    }


    private async createTable() {
        const query = `
        CREATE TABLE IF NOT EXISTS caokimia.Tutor (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            telefone VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL,
            cidade VARCHAR(255) NOT NULL,
            bairro VARCHAR(255) NOT NULL,
            rua VARCHAR(255) NOT NULL,
            numero INT NOT NULL
        )`;


        try {
            const resultado =  await executarComandoSQL(query, []);
            console.log('Query executada com sucesso:', resultado);
        } catch (err) {
            console.error('Error');
        }
    }


    async insertTutor(tutor: Tutor) :Promise<Tutor>{
        const query = "INSERT INTO caokimia.Tutor (name, telefone, email, cidade, bairro, rua, numero) VALUES (?, ?, ?, ?, ?, ?, ?)" ;


        try {
            const resultado = await executarComandoSQL(query, [tutor.name, tutor.telefone, tutor.email, tutor.cidade, tutor.bairro, tutor.rua, tutor.numero]);
            console.log('Tutor inserido com sucesso, ID: ', resultado.insertId);
            tutor.id = resultado.insertId;
            return new Promise<Tutor>((resolve)=>{
                resolve(tutor);
            })
        } catch (err) {
            console.error('Erro ao inserir tutor do Pet:', err);
            throw err;
        }
    }


    async updateTutor(tutor:Tutor) :Promise<Tutor>{
        const query = "UPDATE caokimia.Tutor set name = ?, telefone = ?, email = ?, cidade = ?, bairro = ?, rua = ?, numero = ? where id = ?;" ;

        try {
            const resultado = await executarComandoSQL(query, [tutor.name, tutor.telefone, tutor.email, tutor.cidade, tutor.bairro, tutor.rua, tutor.numero, tutor.id]);
            console.log('Tutor atualizada com sucesso, ID: ', resultado);
            return new Promise<Tutor>((resolve)=>{
                resolve(tutor);
            })
        } catch (err:any) {
            console.error(`Erro ao atualizar o tutor de ID ${tutor.id} gerando o erro: ${err}`);
            throw err;
        }
    }


    async deleteTutor(tutor:Tutor) :Promise<Tutor>{
        const query = "DELETE FROM caokimia.Tutor where id = ?;" ;


        try {
            const resultado = await executarComandoSQL(query, [tutor.id]);
            console.log('Tutor deletado com sucesso: ', tutor);
            return new Promise<Tutor>((resolve)=>{
                resolve(tutor);
            })
        } catch (err:any) {
            console.error(`Falha ao deletar a tutor de ID ${tutor.id} gerando o erro: ${err}`);
            throw err;
        }
    }


    async filterTutor(id: number) :Promise<Tutor>{
        const query = "SELECT * FROM caokimia.Tutor where id = ?" ;


        try {
            const resultado = await executarComandoSQL(query, [id]);
            console.log('Tutor localizado com sucesso, ID: ', resultado);
            return new Promise<Tutor>((resolve)=>{
                resolve(resultado);
            })
        } catch (err:any) {
            console.error(`Falha ao procurar o Tutor de ID ${id} gerando o erro: ${err}`);
            throw err;
        }
    }


    async filterAllTutor() :Promise<Tutor[]>{
        const query = "SELECT * FROM caokimia.Tutor" ;


        try {
            const resultado = await executarComandoSQL(query, []);
            return new Promise<Tutor[]>((resolve)=>{
                resolve(resultado);
            })
        } catch (err:any) {
            console.error(`Falha ao listar os Tutores gerando o erro: ${err}`);
            throw err;
        }
    }


}

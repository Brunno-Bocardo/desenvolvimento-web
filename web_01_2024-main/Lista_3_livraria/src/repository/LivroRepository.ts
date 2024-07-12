import { executarComandoSQL } from "../database/mysql";
import { Livro } from "../model/Livro";

export class LivroRepository {

    constructor() {
        this.createTable()
    }

    private async createTable() {
        const query = `
            create table if not exists livraria.livro (
                id int auto_increment primary key,
                title varchar(255) not null
            )
        `

        try {
            const resultado =  await executarComandoSQL(query, []);
            console.log('Query executada com sucesso:', resultado);
        } catch (err) {
            console.error('Error');
        }
    }

    

}
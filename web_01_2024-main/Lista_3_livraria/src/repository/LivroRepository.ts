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

    async insertLivro(title:string): Promise<any> {
        const query = "insert into livraria.livro (title) values(?)"

        try {
            const result = await executarComandoSQL(query, [title])
            if(result) {
                console.log("Livro adicionado na estante. ID: ", result.insertId)
                const newLivro = new Livro(result.insertId, title)
                return new Promise<Livro>((resolve)=> {
                    resolve(newLivro)
                })
            }
        } catch (err) {
            console.log("Erro ao inserir o livro: ", err)
            throw err
        }
    }

}
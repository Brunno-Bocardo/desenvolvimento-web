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

    async buscarLivros() {
        const query = "SELECT * FROM livraria.livro;";
        try {
            const result = await executarComandoSQL(query, []);
            if (result) {
                return result;
            } else {
                throw new Error("Nenhum livro encontrado");
            }
        } catch (err) {
            console.log("Erro ao buscar livros: ", err);
            throw err;
        }
    }
    
    async buscarLivroPorID(id:number) {
        const query = "SELECT * FROM livraria.livro WHERE id = (?);";
        try {
            const result = await executarComandoSQL(query, [id]);
            if (result.length > 0) {
                return result;
            } else {
                throw new Error("Não existe um livro cadastrado com esse ID");
            }
        } catch (err) {
            console.log("Erro ao buscar livros: ", err);
            throw err;
        }
    }
}
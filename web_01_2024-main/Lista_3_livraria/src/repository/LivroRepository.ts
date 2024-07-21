import { executarComandoSQL } from "../database/mysql";
import { Livro } from "../model/Livro";

export class LivroRepository {

    constructor() {
        this.createTable()
    }

    private async createTable() {
        const query = `
            CREATE TABLE IF NOT EXISTS livraria.livro (
                id INT AUTO_INCREMENT PRIMARY KEY,
                title VARCHAR(255) NOT NULL,
                author VARCHAR(255) NOT NULL,
                publishedDate VARCHAR(255) NOT NULL,
                isbn VARCHAR(20) NOT NULL,
                pages INT NOT NULL,
                language VARCHAR(50) NOT NULL,
                publisher VARCHAR(255) NOT NULL
            );
        `

        try {
            const resultado =  await executarComandoSQL(query, []);
            console.log('Query executada com sucesso:', resultado);
        } catch (err) {
            console.error('Error');
        }
    }

    async insertLivro(title: string, author: string, publishedDate: string, isbn: string, pages: number, language: string, publisher: string): Promise<any> {
        const valores = [title, author, publishedDate, isbn, pages, language, publisher];
        const query = `
            INSERT INTO livraria.livro (title, author, publishedDate, isbn, pages, language, publisher)
            VALUES (?, ?, ?, ?, ?, ?, ?);
        `;

        try {
            const result = await executarComandoSQL(query, valores);
            if (result) {
                console.log("Livro adicionado na estante. ID: ", result.insertId);
                const newLivro = new Livro(result.insertId, title, author, publishedDate, isbn, pages, language, publisher);
                return new Promise<Livro>((resolve) => {
                    resolve(newLivro);
                });
            }
        } catch (err) {
            console.log("Erro ao inserir o livro: ", err);
            throw err;
        }
    }

    async buscarLivros() {
        const query = "SELECT * FROM livraria.livro;";
        try {
            const result = await executarComandoSQL(query, []);
            return result
        } catch (err) {
            console.log("Erro ao buscar livros: ", err);
            throw err;
        }
    }
    
    async buscarLivroPorID(id:number) {
        const query = "SELECT * FROM livraria.livro WHERE id = (?);";
        try {
            const result = await executarComandoSQL(query, [id]);
            return result
        } catch (err) {
            console.log("Erro ao buscar livros: ", err);
            throw err;
        }
    }



    // =============== FUNÇÕES DE VERIFICAÇÃO ===============

    async verificarISBN(isbn:string) {
        const query = "SELECT isbn FROM livraria.livro WHERE isbn = (?);";
        try {
            const result = await executarComandoSQL(query, [isbn]);
            return result.length
        } catch (err) {
            console.log("Erro ao buscar ISBN: ", err);
            throw err;
        }
    }
}
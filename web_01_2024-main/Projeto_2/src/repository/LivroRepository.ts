import { executarComandoSQL } from "../database/mysql";
import { Livro } from "../model/entity/Livro";

export class LivroRepository{

    constructor(){
        this.createTable();
    }

    private async createTable() {
        const query = `
        CREATE TABLE IF NOT EXISTS livraria.livro (
            id INT AUTO_INCREMENT PRIMARY KEY,
            titulo VARCHAR(255) NOT NULL,
            autor VARCHAR(255) NOT NULL,
            categoriaID INT NOT NULL
        )`;

        try {
            const resultado =  await executarComandoSQL(query, []);
            console.log('Query executada com sucesso:', resultado);
        } catch (err) {
            console.error('Error');
        }
    }


    async insertLivro(livro:Livro) :Promise<Livro>{
        const query = "INSERT INTO livraria.livro (titulo, autor, categoriaID) VALUES (?, ?, ?)" ;

        try {
            const resultado = await executarComandoSQL(query, [livro.titulo, livro.autor, livro.categoriaID]);
            console.log('Produto inserido com sucesso, ID: ', resultado.insertId);
            livro.id = resultado.insertId;
            return new Promise<Livro>((resolve)=>{
                resolve(livro);
            })
        } catch (err) {
            console.error('Erro ao inserir o produto:', err);
            throw err;
        }
    }


    async updateLivro(livro:Livro) :Promise<Livro>{
        const query = "UPDATE livraria.livro SET titulo = ?, autor = ?, categoriaID = ? WHERE id = ?;";

        try {
            const resultado = await executarComandoSQL(query, [livro.titulo, livro.autor, livro.categoriaID, livro.id]);
            console.log('Livro atualizado com sucesso, ID: ', livro.id);
            return new Promise<Livro>((resolve)=>{
                resolve(livro);
            })
        } catch (err:any) {
            console.error(`Erro ao atualizar o livro de ID ${livro.id} gerando o erro: ${err}`);
            throw err;
        }
    }


    async filterAllLivros() :Promise<Livro[]>{
        const query = "SELECT * FROM livraria.livro" ;

        try {
            const resultado = await executarComandoSQL(query, []);
            return new Promise<Livro[]>((resolve)=>{
                resolve(resultado);
            })
        } catch (err:any) {
            console.error(`Falha ao listar os livros, gerando o erro: ${err}`);
            throw err;
        }
    }


    async buscarLivrosPorNome(titulo: string): Promise<Livro[]> {
        const query = "SELECT * FROM livraria.livro WHERE titulo = ?";
        
        try {
            const resultado = await executarComandoSQL(query, [titulo]);
            return resultado;
        } catch (err:any) {
            console.error(`Falha ao buscar livro: ${err}`);
            throw err;
        }
    }


    async buscarLivroPorId(livroID: number): Promise<boolean> {
        const query = "SELECT COUNT(*) as total FROM livraria.livro WHERE id = ?";
        const [resultado] = await executarComandoSQL(query, [livroID]);
        return resultado.total > 0;
    }


    async deletarLivro(id:number, titulo:string, autor:string, categoriaID:number): Promise<any> {
        const query = `
            DELETE FROM livraria.livro 
            WHERE id = ? AND titulo = ? AND autor = ? AND categoriaID = ?;
        `;
        const result = await executarComandoSQL(query, [id, titulo, autor, categoriaID]);
        return result;
    }
}
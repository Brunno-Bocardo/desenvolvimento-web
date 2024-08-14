import { executarComandoSQL } from "../database/mysql";
import { Livro } from "../model/Livro";

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

    // FUNÇÃO DE APOIO
    

    // async updateCategoria(categoria:Categoria) :Promise<Categoria>{
    //     const query = "UPDATE livraria.categoria set name = ? WHERE id = ?;" ;

    //     try {
    //         const resultado = await executarComandoSQL(query, [categoria.name, categoria.id]);
    //         console.log('Produto atualizado com sucesso, ID: ', resultado);
    //         return new Promise<Categoria>((resolve)=>{
    //             resolve(categoria);
    //         })
    //     } catch (err:any) {
    //         console.error(`Erro ao atualizar o produto de ID ${categoria.id} gerando o erro: ${err}`);
    //         throw err;
    //     }
    // }

    // async filterAllCategoria() :Promise<Categoria[]>{
    //     const query = "SELECT * FROM livraria.categoria" ;

    //     try {
    //         const resultado = await executarComandoSQL(query, []);
    //         return new Promise<Categoria[]>((resolve)=>{
    //             resolve(resultado);
    //         })
    //     } catch (err:any) {
    //         console.error(`Falha ao listar as categorias, gerando o erro: ${err}`);
    //         throw err;
    //     }
    // }

    
}
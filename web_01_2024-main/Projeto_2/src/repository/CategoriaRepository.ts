import { executarComandoSQL } from "../database/mysql";
import { Categoria } from "../model/Categoria";


export class CategoriaRepository{

    constructor(){
        this.createTable();
    }

    private async createTable() {
        const query = `
        CREATE TABLE IF NOT EXISTS livraria.categoria (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255) NOT NULL
        )`;

        try {
            const resultado =  await executarComandoSQL(query, []);
            console.log('Query executada com sucesso:', resultado);
        } catch (err) {
            console.error('Error');
        }
    }

    async insertCategoria(categoria:Categoria) :Promise<Categoria>{
        const query = "INSERT INTO livraria.categoria (name) VALUES (?)" ;

        try {
            const resultado = await executarComandoSQL(query, [categoria.name]);
            console.log('Produto inserido com sucesso, ID: ', resultado.insertId);
            categoria.id = resultado.insertId;
            return new Promise<Categoria>((resolve)=>{
                resolve(categoria);
            })
        } catch (err) {
            console.error('Erro ao inserir o produto:', err);
            throw err;
        }
    }

    async updateCategoria(categoria:Categoria) :Promise<Categoria>{
        const query = "UPDATE livraria.categoria set name = ? WHERE id = ?;" ;

        try {
            const resultado = await executarComandoSQL(query, [categoria.name, categoria.id]);
            console.log('Produto atualizado com sucesso, ID: ', resultado);
            return new Promise<Categoria>((resolve)=>{
                resolve(categoria);
            })
        } catch (err:any) {
            console.error(`Erro ao atualizar o produto de ID ${categoria.id} gerando o erro: ${err}`);
            throw err;
        }
    }

    async filterAllCategoria() :Promise<Categoria[]>{
        const query = "SELECT * FROM livraria.categoria" ;

        try {
            const resultado = await executarComandoSQL(query, []);
            return new Promise<Categoria[]>((resolve)=>{
                resolve(resultado);
            })
        } catch (err:any) {
            console.error(`Falha ao listar as categorias, gerando o erro: ${err}`);
            throw err;
        }
    }

    async buscaCategoria(categoria:Categoria) :Promise<Categoria[]>{
        const query = "SELECT * FROM livraria.categoria WHERE categoria.name = ?" ;

        try {
            const resultado = await executarComandoSQL(query, [categoria.name]);
            return resultado
        } catch (err:any) {
            console.error(`Falha ao listar as categorias, gerando o erro: ${err}`);
            throw err;
        }
    }

    // async deleteProduct(product:Product) :Promise<Product>{
    //     const query = "DELETE FROM estoque.product where id = ?;" ;

    //     try {
    //         const resultado = await executarComandoSQL(query, [product.id]);
    //         console.log('Produto deletado com sucesso: ', product);
    //         return new Promise<Product>((resolve)=>{
    //             resolve(product);
    //         })
    //     } catch (err:any) {
    //         console.error(`Falha ao deletar o produto de ID ${product.id} gerando o erro: ${err}`);
    //         throw err;
    //     }
    // }

    // async filterProduct(id: number) :Promise<Product>{
    //     const query = "SELECT * FROM estoque.product where id = ?" ;

    //     try {
    //         const resultado = await executarComandoSQL(query, [id]);
    //         console.log('Produto localizado com sucesso, ID: ', resultado);
    //         return new Promise<Product>((resolve)=>{
    //             resolve(resultado);
    //         })
    //     } catch (err:any) {
    //         console.error(`Falha ao procurar o produto de ID ${id} gerando o erro: ${err}`);
    //         throw err;
    //     }
    // }

    

    
}
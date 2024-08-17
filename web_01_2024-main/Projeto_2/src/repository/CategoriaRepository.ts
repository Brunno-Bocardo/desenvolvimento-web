import { executarComandoSQL } from "../database/mysql";
import { Categoria } from "../model/entity/Categoria";

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


    async buscaCategoria(categoria: Categoria): Promise<Categoria[]> {
        const query = "SELECT * FROM livraria.categoria WHERE name = ?";
        try {
            const resultado = await executarComandoSQL(query, [categoria.name]);
            return resultado.map((row: any) => new Categoria(row.id, row.name));
        } catch (err: any) {
            console.error(`Falha ao listar as categorias, gerando o erro: ${err}`);
            throw err;
        }
    }


    async buscaCategoriaID(categoriaID: number): Promise<boolean> {
        const query = "SELECT COUNT(*) as count FROM livraria.categoria WHERE id = ?";
        
        try {
            const resultado = await executarComandoSQL(query, [categoriaID]);
            return resultado[0].count > 0;
        } catch (err: any) {
            console.error(`Falha ao buscar a categoria, gerando o erro: ${err}`);
            throw err;
        }
    }


    async buscaCategoriaIDPlusName(categoriaID:number, name:string): Promise<boolean> {
        const query = "SELECT COUNT(*) as count FROM livraria.categoria WHERE id = ? AND name = ?";
        
        try {
            const resultado = await executarComandoSQL(query, [categoriaID, name]);
            return resultado[0].count > 0;
        } catch (err: any) {
            console.error(`Falha ao buscar a categoria, gerando o erro: ${err}`);
            throw err;
        }
    }


    async verificarUsoCategoria(categoriaID: number): Promise<boolean> {
        const query = `
            SELECT COUNT(*) as total 
            FROM livraria.livro 
            WHERE categoriaID = ?
        `;
        const [resultado] = await executarComandoSQL(query, [categoriaID]);
        return resultado.total > 0;
    }


    async deletarCategoria(categoriaID: number): Promise<void> {
        const query = `
            DELETE FROM livraria.categoria 
            WHERE id = ?
        `;
        await executarComandoSQL(query, [categoriaID]);
    }
       
}
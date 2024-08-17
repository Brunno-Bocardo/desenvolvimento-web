import { executarComandoSQL } from "../database/mysql";
import { Pessoa } from "../model/Pessoa";

export class PessoaRepository {

    constructor() {
        this.createTable();
    }

    private async createTable() {
        const query = `
        CREATE TABLE IF NOT EXISTS livraria.pessoa (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL UNIQUE
        )`;

        try {
            const resultado = await executarComandoSQL(query, []);
            console.log('Tabela criada com sucesso:', resultado);
        } catch (err) {
            console.error('Erro ao criar a tabela:', err);
        }
    }

    async insertPessoa(pessoa: Pessoa): Promise<Pessoa> {
        const query = "INSERT INTO livraria.pessoa (name, email) VALUES (?, ?)";

        try {
            const resultado = await executarComandoSQL(query, [pessoa.name, pessoa.email]);
            console.log('Pessoa inserida com sucesso, ID: ', resultado.insertId);
            pessoa.id = resultado.insertId;
            return new Promise<Pessoa>((resolve) => {
                resolve(pessoa);
            });
        } catch (err) {
            console.error('Erro ao inserir a pessoa:', err);
            throw err;
        }
    }

    async updatePessoa(pessoa: Pessoa): Promise<Pessoa> {
        const query = "UPDATE livraria.pessoa SET name = ?, email = ? WHERE id = ?";

        try {
            const resultado = await executarComandoSQL(query, [pessoa.name, pessoa.email, pessoa.id]);
            if (resultado.affectedRows === 0) {
                throw new Error('Pessoa não encontrada para atualização.');
            }
            console.log('Pessoa atualizada com sucesso, ID: ', pessoa.id);
            return new Promise<Pessoa>((resolve) => {
                resolve(pessoa);
            });
        } catch (err) {
            console.error('Erro ao atualizar a pessoa:', err);
            throw err;
        }
    }

    async buscarPessoaByEmail(email: string): Promise<Pessoa | null> {
        const query = "SELECT * FROM livraria.pessoa WHERE email = ?";

        try {
            const resultados = await executarComandoSQL(query, [email]);
            if (resultados.length > 0) {
                const resultado = resultados[0];
                return Pessoa.getInstance(resultado.id, resultado.name, resultado.email);
            }
            return null;
        } catch (err) {
            console.error('Erro ao buscar a pessoa por e-mail:', err);
            throw err;
        }
    }

}

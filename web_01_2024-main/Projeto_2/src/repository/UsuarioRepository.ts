import { executarComandoSQL } from "../database/mysql";
import { Usuario } from "../model/entity/Usuario";

export class UsuarioRepository {

    constructor(){
        this.createTable();
    }

    private async createTable() {
        const query = `
        CREATE TABLE IF NOT EXISTS livraria.usuario (
            id INT AUTO_INCREMENT PRIMARY KEY,
            pessoaID INT NOT NULL,
            senha VARCHAR(255) NOT NULL
        );`;

        try {
            const resultado = await executarComandoSQL(query, []);
            console.log('Tabela "usuario" criada com sucesso:', resultado);
        } catch (err) {
            console.error('Erro ao criar a tabela "usuario":', err);
        }
    }


    async insertUsuario(usuario: Usuario): Promise<Usuario> {
        const query = "INSERT INTO livraria.usuario (senha, pessoaID) VALUES (?, ?)";

        try {
            const resultado = await executarComandoSQL(query, [usuario.senha, usuario.pessoaID]);
            usuario.id = resultado.insertId;
            return usuario;
        } catch (err) {
            console.error('Erro ao inserir o usuário:', err);
            throw err;
        }
    }


    async atualizarUsuario(usuario: Usuario): Promise<Usuario> {
        const query = "UPDATE livraria.usuario SET senha = ? WHERE id = ?";
    
        try {
            await executarComandoSQL(query, [usuario.senha, usuario.id]);
            return usuario;
        } catch (err) {
            console.error('Erro ao atualizar o usuário:', err);
            throw err;
        }
    }
    

    async buscarUsuarioPorEmail(email: string): Promise<Usuario | null> {
        const query = `
            SELECT u.*, p.id AS pessoaID
            FROM livraria.usuario u
            JOIN livraria.pessoa p ON u.pessoaID = p.id
            WHERE p.email = ?
        `;

        try {
            const resultados = await executarComandoSQL(query, [email]);
            if (resultados.length > 0) {
                const resultado = resultados[0];
                return Usuario.getInstance(resultado.pessoaID, resultado.senha);
            }
            return null;
        } catch (err) {
            console.error('Erro ao buscar o usuário por e-mail:', err);
            throw err;
        }
    }


    async buscarUsuarioPorID(id: number): Promise<boolean> {
        const query = "SELECT * FROM livraria.usuario WHERE id = ?";

        try {
            const resultado = await executarComandoSQL(query, [id]);
            return resultado.length > 0
        } catch (err) {
            console.error(`Erro ao buscar usuário por ID: ${err}`);
            throw err;
        }
    }


    async buscarUsuarioPorPessoaID(pessoaID: number): Promise<Usuario | null> {
        const query = "SELECT * FROM livraria.usuario WHERE pessoaID = ?";
    
        try {
            const resultado = await executarComandoSQL(query, [pessoaID]);
            if (resultado.length > 0) {
                const usuarioData = resultado[0];
                return Usuario.getInstance(usuarioData.id, usuarioData.pessoaID, usuarioData.senha);
            }
            return null;
        } catch (err) {
            console.error(`Erro ao buscar usuário por pessoaID: ${err}`);
            throw err;
        }
    }
    

    async deletarUsuario(id:number, senha:string): Promise<any> {
        console.log(id + " " + senha)
        const query = `
            DELETE FROM livraria.usuario 
            WHERE id = ? AND senha = ?;
        `;
        const resultado = await executarComandoSQL(query, [id, senha]);
        return resultado;
    }
}

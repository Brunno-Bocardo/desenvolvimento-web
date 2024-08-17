import { executarComandoSQL } from "../database/mysql";
import { Emprestimo } from "../model/entity/Emprestimo";

export class EmprestimoRepository {
    constructor(){
        this.createTable();
    }

    private async createTable() {
        const query = `
        CREATE TABLE IF NOT EXISTS livraria.emprestimo (
            id INT AUTO_INCREMENT PRIMARY KEY,
            livroID INT NOT NULL,
            usuarioID INT NOT NULL,
            dataEmprestimo DATE NOT NULL,
            dataDevolucao DATE DEFAULT NULL
        );`;

        try {
            const resultado = await executarComandoSQL(query, []);
            console.log('Tabela "emprestimo" criada com sucesso:', resultado);
        } catch (err) {
            console.error('Erro ao criar a tabela "emprestimo":', err);
        }
    }

    
    async verificarEmprestimoAtivo(livroID: number): Promise<boolean> {
        const query = `
            SELECT COUNT(*) as total 
            FROM livraria.emprestimo 
            WHERE livroID = ? AND (dataDevolucao IS NULL OR dataDevolucao >= CURDATE())
        `;
        const [resultado] = await executarComandoSQL(query, [livroID]);
    
        // Se não houver empréstimos ativos ou a contagem for 0, o livro está disponível
        return resultado.total > 0;
    }    
    

    async salvarEmprestimo(emprestimo: Emprestimo): Promise<Emprestimo> {
        const query = `
            INSERT INTO livraria.emprestimo (livroID, usuarioID, dataEmprestimo, dataDevolucao)
            VALUES (?, ?, ?, ?)
        `;
        const valores = [emprestimo.livroID, emprestimo.usuarioID, emprestimo.dataEmprestimo, emprestimo.dataDevolucao];
        const resultado = await executarComandoSQL(query, valores);

        emprestimo.id = resultado.insertId;
        return emprestimo;
    }


    async verificarEmprestimosAtivos(usuarioID: number): Promise<boolean> {
        const query = `
            SELECT COUNT(*) as total 
            FROM livraria.emprestimo 
            WHERE usuarioID = ? 
              AND (dataDevolucao IS NULL OR dataDevolucao >= CURDATE())
        `;
        const [resultado] = await executarComandoSQL(query, [usuarioID]);
        return resultado.total > 0; // Retorna true se o usuário tiver empréstimos ativos
    }
}

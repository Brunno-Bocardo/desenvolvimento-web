import { Emprestimo } from '../model/entity/Emprestimo';
import { UsuarioRepository } from "../repository/UsuarioRepository";
import { LivroRepository } from "../repository/LivroRepository";
import { EmprestimoRepository } from "../repository/EmprestimoRepository";

export class EmprestimoService {
    emprestimoRepository: EmprestimoRepository = new EmprestimoRepository();
    usuarioRepository: UsuarioRepository = new UsuarioRepository();
    livroRepository: LivroRepository = new LivroRepository();

    async registrarEmprestimo(emprestimoData: any): Promise<Emprestimo> {
        const { livroID, usuarioID } = emprestimoData

        // 1. Verificar se o usuário existe
        const usuarioExiste = await this.usuarioRepository.buscarUsuarioPorID(usuarioID);
        if (!usuarioExiste) {
            throw new Error('Usuário não existe.');
        }

        // 2. Verificar se o livro existe
        const livroExiste = await this.livroRepository.buscarLivroPorId(livroID);
        if (!livroExiste) {
            throw new Error('Livro não existe.');
        }

        // 3. Verificar se o livro está alugado
        const livroAlugado = await this.emprestimoRepository.verificarEmprestimoAtivo(livroID);
        if (livroAlugado) {
            throw new Error('Livro não está disponível para empréstimo.');
        }

        // 4. Registrar o empréstimo
        const dataEmprestimo = new Date(); // Data atual
        const dataDevolucao = new Date();
        const emprestimo = Emprestimo.getInstance(undefined, livroID, usuarioID, dataEmprestimo, dataDevolucao);
        return this.emprestimoRepository.salvarEmprestimo(emprestimo);
    }
}

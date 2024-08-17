import { Usuario } from "../model/entity/Usuario";
import { UsuarioRepository } from "../repository/UsuarioRepository";
import { PessoaRepository } from "../repository/PessoaRepository"; 
import { EmprestimoRepository } from "../repository/EmprestimoRepository";

export class UsuarioService {
    emprestimoRepository: EmprestimoRepository = new EmprestimoRepository();
    usuarioRepository: UsuarioRepository = new UsuarioRepository();
    pessoaRepository: PessoaRepository = new PessoaRepository(); 

    async cadastrarUsuario(usuarioData: any): Promise<Usuario> {
        const { senha, pessoaID } = usuarioData;

        const pessoaExiste = await this.pessoaRepository.buscarPessoaPorID(pessoaID);
        if (!pessoaExiste) {
            throw new Error('Pessoa não existe.');
        }

        const novoUsuario = Usuario.getInstance(undefined, pessoaID, senha);
        return this.usuarioRepository.insertUsuario(novoUsuario);
    }


    async atualizarUsuario(usuarioData: any): Promise<Usuario> {
        const { id, senha } = usuarioData;
    
        const usuarioExiste = await this.usuarioRepository.buscarUsuarioPorID(id);
        if (!usuarioExiste) {
            throw new Error('Usuário não encontrado.');
        }
    
        const usuario = Usuario.getInstance(id, undefined, senha);
        return this.usuarioRepository.atualizarUsuario(usuario);
    }
    

    async buscarUsuarioPorEmail(email: string): Promise<Usuario | null> {
        const pessoa = await this.pessoaRepository.buscarPessoaPorEmail(email);
        if (!pessoa) {
            throw new Error('Pessoa não encontrada.');
        }
    
        const usuario = await this.usuarioRepository.buscarUsuarioPorPessoaID(pessoa.id);
        return usuario;
    }
    

    async deletarUsuario(usuarioData: any): Promise<void> {
        const { id, senha } = usuarioData

        const temEmprestimosAtivos = await this.emprestimoRepository.verificarEmprestimosAtivos(id);
        if (temEmprestimosAtivos) {
            throw new Error('Não é possível deletar o usuário, pois ele possui empréstimos ativos.');
        }

        const resultado = await this.usuarioRepository.deletarUsuario(id, senha);
        if (resultado.affectedRows === 0) {
            throw new Error('Usuário não encontrado ou senha incorreta.');
        }
    }
}

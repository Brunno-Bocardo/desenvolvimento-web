import { Pessoa } from "../model/entity/Pessoa";
import { PessoaRepository } from "../repository/PessoaRepository";
import { UsuarioRepository } from "../repository/UsuarioRepository";

export class PessoaService {

    pessoaRepository: PessoaRepository = new PessoaRepository();
    usuarioRepository: UsuarioRepository = new UsuarioRepository();

    async cadastrarPessoa(pessoaData: any): Promise<Pessoa> {
        const { name, email } = pessoaData;
    
        const pessoaExiste = await this.pessoaRepository.buscarPessoaByEmail(email);
        if (pessoaExiste) {
            throw new Error('Já existe uma pessoa com este e-mail.');
        }
    
        const novaPessoa = Pessoa.getInstance(undefined, name, email);
        return this.pessoaRepository.insertPessoa(novaPessoa);
    }


    async atualizarPessoa(pessoaData: any): Promise<Pessoa> {
        const { id, name, email } = pessoaData;
        const pessoa = Pessoa.getInstance(id, name, email);
        const pessoaAtualizada = await this.pessoaRepository.updatePessoa(pessoa);
        console.log("Service - Update ", pessoaAtualizada);
        return pessoaAtualizada;
    }


    async buscarPessoaPorEmail(email: string): Promise<Pessoa | null> {
        console.log("opa!")
        const pessoa = await this.pessoaRepository.buscarPessoaByEmail(email);
        if (!pessoa) {
            throw new Error('Pessoa não encontrada');
        }
        console.log("opa")
        return pessoa;
    }


    async deletarPessoa(pessoaData: any): Promise<void> {
        const { id, email, name } = pessoaData

        const associadaAoUsuario = await this.usuarioRepository.buscarUsuarioPorPessoaID(id);
        if (associadaAoUsuario) {
            throw new Error('Não é possível deletar a pessoa, pois ela está associada a um usuário.');
        }

        await this.pessoaRepository.deletarPessoa(id, email, name);
    }
}
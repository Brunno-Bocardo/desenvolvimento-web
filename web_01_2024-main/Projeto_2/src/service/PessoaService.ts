import { Pessoa } from "../model/Pessoa";
import { PessoaRepository } from "../repository/PessoaRepository";

export class PessoaService {

    pessoaRepository: PessoaRepository = new PessoaRepository();

    async cadastrarPessoa(pessoaData: any): Promise<Pessoa> {
        const { name, email } = pessoaData;
    
        // Verificar se a pessoa com o e-mail já existe
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
        // Busca a pessoa pelo e-mail no repositório
        const pessoa = await this.pessoaRepository.buscarPessoaByEmail(email);
        if (!pessoa) {
            throw new Error('Pessoa não encontrada');
        }
        return pessoa;
    }
}

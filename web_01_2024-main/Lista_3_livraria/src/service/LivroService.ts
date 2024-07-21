import { Livro } from "../model/Livro"
import { LivroRepository } from "../repository/LivroRepository"

export class LivroService {

    livroRepository: LivroRepository = new LivroRepository()

    async registrarLivro(livroData:any): Promise<Livro> {
        const isbn = livroData.isbn;
        
        await this.livroRepository.validarLivroData(livroData);

        const verificaISBN = await this.livroRepository.verificarISBN(isbn)
        if (verificaISBN > 0) {
            throw new Error("Já existe um livro cadastrado com esse ISBN");
        }

        const novoLivro = await this.livroRepository.insertLivro(livroData)
        console.log("Service - Insert - ", novoLivro)
        return novoLivro;
    }

    async consultarLivros() {
        const result = await this.livroRepository.buscarLivros()
        if (result) {
            return result;
        } else {
            throw new Error("Nenhum livro encontrado");
        }
    }

    async consultarLivro(id:number) {
        const resultadoBusca = await this.livroRepository.buscarLivroPorID(id)
        if (resultadoBusca.length > 0) {
            return resultadoBusca;
        } else {
            throw new Error("Não existe um livro cadastrado com esse ID");
        }
    }

    async updateLivro(id:number, livroData:any) {
        const resultadoBusca = await this.livroRepository.verificarID(id)
        if (resultadoBusca.length > 0) {
            const livroAtualizado = await this.livroRepository.atualizarLivro(id, livroData)
            return livroAtualizado;
        } else {
            throw new Error("Não existe um livro cadastrado com esse ID");
        }
    }

}
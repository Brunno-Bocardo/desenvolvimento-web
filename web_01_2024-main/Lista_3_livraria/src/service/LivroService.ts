import { Livro } from "../model/Livro"
import { LivroRepository } from "../repository/LivroRepository"

export class LivroService {

    livroRepository: LivroRepository = new LivroRepository()

    async registrarLivro(livroData:any): Promise<Livro> {
        const { title, author, publishedDate, isbn, pages, language, publisher } = livroData;
        if (!title || !author || !publishedDate || !isbn || !pages || !language || !publisher ){
            throw new Error("Informações incompletas ou inválidas");
        }

        const verificaISBN = await this.livroRepository.verificarISBN(isbn)
        if (verificaISBN > 0) {
            throw new Error("Já existe um livro cadastrado com esse ISBN");
        }

        const novoLivro = await this.livroRepository.insertLivro(title, author, publishedDate, isbn, pages, language, publisher)
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

    
}
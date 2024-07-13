import { Livro } from "../model/Livro"
import { LivroRepository } from "../repository/LivroRepository"

export class LivroService {

    livroRepository: LivroRepository = new LivroRepository()

    async registrarLivro(livroData:any): Promise<Livro> {
        const {title} = livroData

        if (!title) {
            throw new Error("Informações incompletas");
        }

        const novoLivro = await this.livroRepository.insertLivro(title)
        console.log("Service - Insert - ", novoLivro)
        return novoLivro;
    }

}
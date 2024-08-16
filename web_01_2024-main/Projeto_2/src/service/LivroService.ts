import { Livro } from "../model/Livro";
import { LivroRepository } from "../repository/LivroRepository";
import { CategoriaRepository } from "../repository/CategoriaRepository";

export class LivroService{

    livroRepository: LivroRepository = new LivroRepository();
    categoriaRepository: CategoriaRepository = new CategoriaRepository();

    async cadastrarLivro(livroData: any): Promise<Livro> {
        const { titulo, autor, categoriaID } = livroData;
        const livro = new Livro(undefined, titulo, autor, categoriaID)
        
        const categoriaExiste = await this.categoriaRepository.buscaCategoriaID(categoriaID)

        if (categoriaExiste) {
            const novoLivro =  await this.livroRepository.insertLivro(livro);
            console.log("Service - Insert ", novoLivro);
            return novoLivro;
        } else {
            throw new Error('Categoria não existente com o ID passado');
        }
    }


    async atualizarLivro(livroData: any): Promise<Livro> {
        const { id, titulo, autor, categoriaID } = livroData;

        const livro = new Livro(id, titulo, autor, categoriaID)
        const categoriaExiste = await this.categoriaRepository.buscaCategoriaID(categoriaID)

        if (categoriaExiste) {
            await this.livroRepository.updateLivro(livroData);
            console.log("Service - Update ", livro);
            return livro;
        } else {
            throw new Error('Categoria não existente com o ID passado');
        }
    }

    async listarAllLivros(): Promise<Livro[]> {
        const livros =  await this.livroRepository.filterAllLivros();
        if (livros.length === 0) {
            throw new Error("Nenhum livro encontrado.");
        }
        console.log("Service - Filtrar Todos", livros);
        return livros;
    }

    async listarLivrosPorNome(titulo: string): Promise<Livro[]> {
        const livros = await this.livroRepository.buscarLivrosPorNome(titulo);

        if (livros.length === 0) {
            throw new Error(`Nenhum livro com título '${titulo}' foi encontrado.`);
        }

        return livros;
    }



}
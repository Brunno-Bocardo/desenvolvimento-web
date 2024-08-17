import { Livro } from "../model/entity/Livro";
import { LivroRepository } from "../repository/LivroRepository";
import { CategoriaRepository } from "../repository/CategoriaRepository";
import { EmprestimoRepository } from "../repository/EmprestimoRepository";

export class LivroService{

    livroRepository: LivroRepository = new LivroRepository();
    categoriaRepository: CategoriaRepository = new CategoriaRepository();
    emprestimoRepository: EmprestimoRepository = new EmprestimoRepository();

    async cadastrarLivro(livroData: any): Promise<Livro> {
        const { titulo, autor, categoriaID } = livroData;
        
        const livro = Livro.getInstance(undefined, titulo, autor, categoriaID);
        const categoriaExiste = await this.categoriaRepository.buscaCategoriaID(categoriaID);

        if (categoriaExiste) {
            const novoLivro = await this.livroRepository.insertLivro(livro);
            console.log("Service - Insert ", novoLivro);
            return novoLivro;
        } else {
            throw new Error('Categoria não existente com o ID passado');
        }
    }


    async atualizarLivro(livroData: any): Promise<Livro> {
        const { id, titulo, autor, categoriaID } = livroData;

        const livro = Livro.getInstance(id, titulo, autor, categoriaID);
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


    async deletarLivro(livroData: any): Promise<void> {
        const { id, titulo, autor, categoriaID } = livroData

        const livroEmprestado = await this.emprestimoRepository.verificarEmprestimoAtivo(id);
        if (livroEmprestado) {
            throw new Error('Não é possível deletar o livro, pois ele está atualmente emprestado.');
        }

        const deletado = await this.livroRepository.deletarLivro(id, titulo, autor, categoriaID);
        if (!deletado) {
            throw new Error('Livro não existe');
        }
    }
}
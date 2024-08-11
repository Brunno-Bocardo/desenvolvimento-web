import { Livro } from "../model/Livro";
import { LivroRepository } from "../repository/LivroRepository";

export class LivroService{

    livroRepository: LivroRepository = new LivroRepository();

    async cadastrarLivro(livroData: any): Promise<Livro> {
        const { titulo, autor, categoriaID } = livroData;
        const livro = new Livro(undefined, titulo, autor, categoriaID)
        
        const novoLivro =  await this.livroRepository.insertLivro(livro);
        console.log("Service - Insert ", novoLivro);
        return novoLivro;
    }


    // async atualizarCategoria(categoriaData: any): Promise<Categoria> {
    //     const { id, name } = categoriaData;

    //     const categoria = new Categoria(id, name)

    //     await this.categoriaRepository.updateCategoria(categoria);
    //     console.log("Service - Update ", categoria);
    //     return categoria;
    // }


    // async listarAllCategorias(): Promise<Categoria[]> {
    //     const categoria =  await this.categoriaRepository.filterAllCategoria();
    //     console.log("Service - Filtrar Todos", categoria);
    //     return categoria;
    // }
}
import { Categoria } from "../model/Categoria";
import { CategoriaRepository } from "../repository/CategoriaRepository";

export class CategoriaService{

    categoriaRepository: CategoriaRepository = new CategoriaRepository();

    async cadastrarCategoria(categoriaData: any): Promise<Categoria> {
        const { name } = categoriaData;
        
        const categoria = new Categoria(undefined, name)

        const existe = await this.categoriaRepository.buscaCategoria(categoria)
        if (existe.length > 0) {
            throw new Error('Categoria já existe');
        } else {
            const novoCategoria =  await this.categoriaRepository.insertCategoria(categoria);
            console.log("Service - Insert ", novoCategoria);
            return novoCategoria;
        } 
    }


    async atualizarCategoria(categoriaData: any): Promise<Categoria> {
        const { id, name } = categoriaData;

        const categoria = new Categoria(id, name)

        const existe = await this.categoriaRepository.buscaCategoriaID(categoria)
        if (existe.length > 0) {
            await this.categoriaRepository.updateCategoria(categoria);
            console.log("Service - Update ", categoria);
            return categoria;
        } else {
            throw new Error('Categoria não existente com o ID passado');
        }
    }


    async listarAllCategorias(): Promise<Categoria[]> {
        const categoria =  await this.categoriaRepository.filterAllCategoria();
        console.log("Service - Filtrar Todos", categoria);
        return categoria;
    }

    // async deletarProduto(produtoData: any): Promise<Product> {
    //     const { id, name, price, expirationDate } = produtoData;

    //     const produto = new Product(id, name, price, expirationDate)

    //     await this.productRepository.deleteProduct(produto);
    //     console.log("Service - Delete ", produto);
    //     return produto;
    // }

    // async filtrarProduto(produtoData: any): Promise<Product> {
    //     const idNumber = parseInt(produtoData, 10);

    //     const produto =  await this.productRepository.filterProduct(idNumber);
    //     console.log("Service - Filtrar", produto);
    //     return produto;
    // }

    

}
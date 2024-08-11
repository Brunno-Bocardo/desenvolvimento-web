import { Categoria } from "../model/Categoria";
import { CategoriaRepository } from "../repository/CategoriaRepository";

export class CategoriaService{

    categoriaRepository: CategoriaRepository = new CategoriaRepository();

    async cadastrarCategoria(categoriaData: any): Promise<Categoria> {
        const { name } = categoriaData;
        
        const categoria = new Categoria(undefined, name)

        const novoCategoria =  await this.categoriaRepository.insertCategoria(categoria);
        console.log("Service - Insert ", novoCategoria);
        return novoCategoria;
    }

    async atualizarCategoria(categoriaData: any): Promise<Categoria> {
        const { id, name } = categoriaData;

        const categoria = new Categoria(id, name)

        await this.categoriaRepository.updateCategoria(categoria);
        console.log("Service - Update ", categoria);
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

    // async listarTodosProdutos(): Promise<Product[]> {
    //     const produto =  await this.productRepository.filterAllProduct();
    //     console.log("Service - Filtrar Todos", produto);
    //     return produto;
    // }

}
import { Categoria } from "../model/entity/Categoria";
import { CategoriaRepository } from "../repository/CategoriaRepository";

export class CategoriaService{

    categoriaRepository: CategoriaRepository = new CategoriaRepository();

    async cadastrarCategoria(categoriaData: any): Promise<Categoria> {
        const { name } = categoriaData;
        
        const categoria = Categoria.getInstance(undefined, name)

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

        const categoria = Categoria.getInstance(id, name)

        const existe = await this.categoriaRepository.buscaCategoriaID(categoria.id)
        if (existe) {
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

}
import { TipoConta } from "../model/TipoConta"
import { TipoContaRepository } from "../repository/TipoContaRepository"

export class TipoContaService {
    tipoContaRepository: TipoContaRepository = new TipoContaRepository()

    async criaTipoConta(contaData:any):Promise<TipoConta> {
        const {descricao} = contaData
        if (!descricao) {
            throw new Error("Dados faltando")
        }

        const codigoTipoConta = Math.floor(Math.random() * (10000 - 99999 + 1))
        const novoTipoDeConta = await this.tipoContaRepository.insertTipoDeConta(descricao, codigoTipoConta)
        return novoTipoDeConta
    }



//     livroRepository: LivroRepository = new LivroRepository()

//     async registrarLivro(livroData:any): Promise<Livro> {
//         const isbn = livroData.isbn;
        
//         await this.livroRepository.validarLivroData(livroData);

//         const verificaISBN = await this.livroRepository.verificarISBN(isbn)
//         if (verificaISBN > 0) {
//             throw new Error("Já existe um livro cadastrado com esse ISBN");
//         }

//         const novoLivro = await this.livroRepository.insertLivro(livroData)
//         console.log("Service - Insert - ", novoLivro)
//         return novoLivro;
//     }


}
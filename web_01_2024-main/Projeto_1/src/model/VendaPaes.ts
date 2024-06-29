import { ItemVenda } from './ItemVenda';

export class VendaPaes {
    private static nextId: number = 1;
    // Isso é uma variável estática 
    // O que significa que ela é compartilhada entre todas as instâncias da classe 
    // Sendo assim, a cada nova instância, ela aumenta seu valor em 1
    id:number;
    cpfCliente: string;
    valorTotal: number;
    itensComprados: ItemVenda[];

    constructor(cpfCliente: string, valorTotal: number, itensComprados: ItemVenda[]) {
        this.id = VendaPaes.nextId++;
        this.cpfCliente = cpfCliente;
        this.valorTotal = valorTotal;
        this.itensComprados = itensComprados;
    }
}
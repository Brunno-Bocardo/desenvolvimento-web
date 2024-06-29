import { ModalidadePaes } from "../model/ModalidadePaes";
import { Estoque } from "../model/EstoquePaes";
import { VendaPaes } from "../model/VendaPaes";
import { ItemVenda } from "../model/ItemVenda";

export class GlobalClass {
    // Lista da modalidade
    modalidadeList:ModalidadePaes[] = [];

    // Lista do estoque 
    estoqueList: Estoque[] = [];

    // Lista das vendas
    vendaList: VendaPaes[] = [];

    // Lista das itens
    itensList: ItemVenda[] = [];
}

// Exporto uma instancia que vai conter todos os arrays no mesmo lugar 
export const globalData = new GlobalClass()
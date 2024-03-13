import { Animal } from "./interfaceAnimal";

export class Ave implements Animal {
    temPenas(): void {
        console.log("AVES: Mas é claro")
    }
    mama(): void {
        console.log("AVES: Acho que não mamam")
    }
    consegueNadar(): void {
        console.log("AVES: Voce ja viu um pato? Que bixo foda")
    }

}
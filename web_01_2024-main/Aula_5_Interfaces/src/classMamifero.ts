import { Animal } from "./interfaceAnimal";

export class Mamifero implements Animal {
    temPenas(): void {
        console.log("MAMÍFERO: Não tem")
    }
    mama(): void {
        console.log("MAMÍFERO: Sim, eles mamam")
    }
    consegueNadar(): void {
        console.log("MAMÍFERO: Baleias são mamíferos")
    }

}
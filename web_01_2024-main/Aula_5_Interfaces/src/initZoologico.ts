import { Animal } from "./interfaceAnimal";
import { Mamifero } from "./classMamifero";
import { Ave } from "./classAves";

function fatosAnimalescos(animal: Animal) {
    animal.temPenas()
    animal.mama()
    animal.consegueNadar()
}

let mamiferos = new Mamifero
let aves = new Ave

fatosAnimalescos(mamiferos)
fatosAnimalescos(aves)
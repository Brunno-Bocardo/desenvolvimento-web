"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const classMamifero_1 = require("./classMamifero");
const classAves_1 = require("./classAves");
function fatosAnimalescos(animal) {
    animal.temPenas();
    animal.mama();
    animal.consegueNadar();
}
let mamiferos = new classMamifero_1.Mamifero;
let aves = new classAves_1.Ave;
fatosAnimalescos(mamiferos);
fatosAnimalescos(aves);

import { executarComandoSQL } from "../database/mysql";
import { Pet } from "../model/entity/Pet";


export class PetRepository{

    constructor(){
        this.createTable();
    }

    private async createTable() {
        const query = `
        CREATE TABLE IF NOT EXISTS caokimia.Pet (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            idade INT NOT NULL,
            tutorID INT NOT NULL,
            peso DECIMAL(3,2) NOT NULL,
            raca VARCHAR(255) NOT NULL,
            FOREIGN KEY (tutorID) REFERENCES Tutor (id)
        )`;

        try {
                const resultado =  await executarComandoSQL(query, []);
                console.log('Query executada com sucesso:', resultado);
        } catch (err) {
            console.error('Error');
        }
    }

    async insertPet(pet: Pet) :Promise<Pet>{
        const query = "INSERT INTO caokimia.Pet (name, idade, tutorID, peso, raca) VALUES (?, ?, ?, ?, ?)" ;

        try {
            const resultado = await executarComandoSQL(query, [pet.name, pet.idade, pet.tutorID, pet.peso, pet.raca]);
            console.log('Pet inserido com sucesso, ID: ', resultado.insertId);
            pet.id = resultado.insertId;
            return new Promise<Pet>((resolve)=>{
                resolve(pet);
            })
        } catch (err) {
            console.error('Erro ao inserir o seu filho com pelos:', err);
            throw err;
        }
    }

    async updatePet(pet:Pet) :Promise<Pet>{
        const query = "UPDATE caokimia.Pet set name = ?, idade = ?, tutorID = ?, peso = ?, raca = ? where id = ?;" ;

        try {
            const resultado = await executarComandoSQL(query, [pet.name, pet.idade, pet.tutorID, pet.peso, pet.raca, pet.id]);
            console.log('Bicho atualizado com sucesso, ID: ', resultado);
            return new Promise<Pet>((resolve)=>{
                resolve(pet);
            })
        } catch (err:any) {
            console.error(`Erro ao atualizar o pet de ID ${pet.id} gerando o erro: ${err}`);
            throw err;
        }
    }

    async deletePet(pet:Pet) :Promise<Pet>{
        const query = "DELETE FROM caokimia.Pet where id = ?;" ;

        try {
            const resultado = await executarComandoSQL(query, [pet.id]);
            console.log('Pet deletado com sucesso: ', pet);
            return new Promise<Pet>((resolve)=>{
                resolve(pet);
            })
        } catch (err:any) {
            console.error(`Falha ao deletar o bicho de ID ${pet.id} gerando o erro: ${err}`);
            throw err;
        }
    }

    async filterPet(id: number) :Promise<Pet[]>{
        const query = "SELECT * FROM caokimia.Pet where id = ?" ;

        try {
            const resultado = await executarComandoSQL(query, [id]);
            console.log('Pet localizado com sucesso, ID: ', resultado);
            return new Promise<Pet[]>((resolve)=>{
                resolve(resultado);
            })
        } catch (err:any) {
            console.error(`Falha ao procurar o Pet de ID ${id} gerando o erro: ${err}`);
            throw err;
        }
    }

    async filterAllPet() :Promise<Pet[]>{
        const query = "SELECT * FROM caokimia.Pet" ;

        try {
            const resultado = await executarComandoSQL(query, []);
            return new Promise<Pet[]>((resolve)=>{
                resolve(resultado);
            })
        } catch (err:any) {
            console.error(`Falha ao listar os Pets gerando o erro: ${err}`);
            throw err;
        }
    }

    
}
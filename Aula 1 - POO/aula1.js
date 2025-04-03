const prompt = require('prompt-sync')();

// Modelo de atributos e funções para criação de um objeto
class Cliente {
    // # -> priva o dado
    #nome; //Atributo
    idade;
    cpf;
    agencia;
    
    // Retorna uma string com os dados/atributos
    getDescricao() {
        return "Nome: " + this.#nome + ", Idade: " + this.idade;
    }

    // Obtem nome
    getNome() {
        return this.#nome;
    }

    // Preenche nome
    setNome(value) {
        this.#nome = value;
    }
}

// Objeto que possui as informações da classe de forma individual
let cliente = new Cliente();

cliente.setNome(prompt("Digite o nome do cliente: "));
cliente.idade = 20;
cliente.cpf = "999.999.999-01"
cliente.agencia = 101010;

console.log(cliente.getDescricao());


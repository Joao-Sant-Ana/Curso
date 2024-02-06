/*class Pessoa {

    constructor(nome, cpf) {
        this.nome = nome;
        this.cpf = cpf
    }

    getNome() {
        return this.nome;
    }
}

var joao = new Pessoa("Teste", "111.111.111-11");
console.log(joao.getNome());*/

/*class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    
    showInfo(nome, idade) {
        return `${this.nome} tem ${this.idade}`
    }
}

class Pfisica extends Pessoa {
    constructor(nome, idade, cpf) {
        super(nome, idade);
        this.cpf = cpf;
    }
}

var pessoa1 = new Pfisica("João", 17, "111.111.111-11")
console.log(pessoa1);
console.log(pessoa1.showInfo())*/


class Conta{
    constructor(nome, numero) {
        this.nome = nome;
        this.numero = numero;
        this.saldo = 0;
    }

    deposito(valor) {
        this.valor = valor;
    }

    saque(valor) {
        if (this.valor > valor) {
            console.log("DINHEIRO INSUFICIENTE!");
        } else {
            this.saldo -= valor
        }
    }

    getSaldo() {
        return this.saldo;
    }
}

class Contacorrente extends Conta {
    constructor(nome, numero) {
        super(nome, numero);
    }

    deposito(valor) {
        this.saldo += (valor - 2);
    }
}

let joao = new Contacorrente("João", 123);
joao.deposito(200)
console.log(joao.getSaldo())
joao.saque(50)
console.log(joao.getSaldo())
joao.deposito(200)
console.log(joao.getSaldo())
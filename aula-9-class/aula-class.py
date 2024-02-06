"""class Funcionario:
    def __init__(self, salario):
        self.salario = salario

    def getSalario(self):
        return self.salario

joao = Funcionario(2000)
print(joao.getSalario())"""



"""class Pessoa:
    def __init__(self, nome, idade):
        self.nome = nome
        self.idade = idade
    
    def getInfo(self):
        return self.nome, self.idade, self.cpf

class Pfisica(Pessoa):
    def __init__(self, nome, idade, cpf):
        super().__init__(nome, idade)
        self.cpf = cpf

joao = Pfisica("João", 17, "111.111.111-11")
print(joao.getInfo())"""






class Conta:
    def __init__(self, nome, numero):
        self.nome = nome
        self.numero = numero
        self.saldo = 0
    
    def depositar(self, valor):
        self.saldo += valor
    
    def saque(self, valor):
        if(self.saldo > 0 & self.saldo <= valor):
            self.saldo -= valor
        else:
            return "Dinhero insuficiente!"
    
    def getSaldo(self):
        return self.saldo

class ContaCorrente(Conta):
    def __init__(self, nome, numero):
        super().__init__(nome, numero)
    
    def depositar(self, valor):
        self.saldo += (valor - 2)
    
joao = ContaCorrente("João", 1111)
joao.depositar(200)
print(joao.getSaldo())
joao.saque(50)
print(joao.getSaldo())
joao.depositar(200)
print(joao.getSaldo())
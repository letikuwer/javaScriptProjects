class Cliente{
    nome;
    cpf;
}

class contaCorrente{
    agencia;
    saldo;
    sacar(valor){
        if (this.saldo >= valor){
            this.saldo += valor;
        }
    }
}
const cliente1 = new Cliente ();
const cliente2= new Cliente ();


cliente1.nome ="Letícia";
cliente1.cpf = 03831091090;


cliente2.nome= "Alice";
cliente2.cpf= 25845456464;

const contaCorrentelCliente1 = new contaCorrente();
contaCorrentelCliente1.saldo=0;
contaCorrentelCliente1.agencia = 1001;


console.log (contaCorrentelCliente1.saldo);
contaCorrentelCliente1.saldo=100;
console.log (contaCorrentelCliente1.saldo);
let valorSacado = 200;

contaCorrentelCliente1.saldo -= valorSacado;



console.log (contaCorrenteRicardo.saldo);
console.log(cliente1);
console.log(cliente2);
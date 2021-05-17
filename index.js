class Cliente{
    nome;
    cpf;
    agencia;
    saldo;
    rg;
}
const cliente1 = new Cliente ();
const cliente2= new Cliente ();


cliente1.nome ="Letícia";
cliente1.cpf = 03831091090;
cliente1.agencia = 1001;
cliente1.saldo = 0;
cliente1.rg = 4545454545

cliente2.nome= "Alice";
cliente2.cpf= 25845456464;
cliente2.agencia= 1001;
cliente2.saldo=0;

console.log(cliente1);
console.log(cliente2);
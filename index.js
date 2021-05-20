
import {Cliente} from "./cliente.js";
const cliente1 = new Cliente ();
const cliente2= new Cliente ();


cliente1.nome ="Letícia";
cliente1.cpf = 03831091090;


cliente2.nome= "Alice";
cliente2.cpf= 25845456464;

const contaCorrenteCliente1 = new contaCorrente();
contaCorrenteCliente1.agencia = 1001;

contaCorrenteCliente1.depositar(100);
contaCorrenteCliente1.depositar(100);
contaCorrenteCliente1.depositar(100);
const valorSacado = contaCorrenteCliente1.sacar(50);


console.log (contaCorrenteCliente1);

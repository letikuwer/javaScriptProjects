
import {Cliente} from "./cliente.js";
import {contaCorrente} from "./contaCorrente.js";

const cliente1 = new Cliente ();
const cliente2= new Cliente ();

cliente1.nome ="Letícia";
cliente1.cpf = 53831091090;
cliente2.nome= "Alice";
cliente2.cpf= 25845456464;

const conta1 = new contaCorrente();
conta1.agencia = 1001;
conta1.cliente = cliente1;
conta1.depositar(500);

const conta2 = new contaCorrente();
conta2.agencia=1002;
conta2.cliente=cliente2;

let valor = 200;
conta1.transferir(200,conta2);


console.log (conta2);
console.log (conta1);

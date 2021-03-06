import { Cliente } from "./cliente.js";

export class contaCorrente{
    agencia;
    _cliente;

    set cliente(novoValor){
        if (novoValor instanceof Cliente){
            this._cliente= novoValor;
        }
        

    }

    _saldo=0;

    get cliente(){
        return this._cliente;
    }
    
    sacar(valor){
        if (this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor){
        if (valor <= 0){
            return;
        }
            this._saldo += valor;
        
    }
    transferir(valor,conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);

    }
}
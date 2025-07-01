import { Injectable } from '@angular/core';
import { Cliente } from './cadastro/cliente';

@Injectable({
  providedIn: 'root'
})
export class Customer {

  static REPO_CLIENTES = "_CLIENTES";
  
  constructor() { }

    salvar(cliente: Cliente) {
      const storage = this.obterStorage();
      storage.push(cliente);
      localStorage.setItem(Customer.REPO_CLIENTES, JSON.stringify(storage));
    }

    pesquisarClientes(nomeBusca: string) : Cliente[]{

      const clientes = this.obterStorage();
      if(!nomeBusca){
        return clientes;
      }
      return clientes.filter(cliente => cliente.nome?.indexOf(nomeBusca) !== -1);

    }

    private obterStorage() : Cliente[] {
      const clientesString = localStorage.getItem(Customer.REPO_CLIENTES);
      if (clientesString) {
        const clientes: Cliente[] = JSON.parse(clientesString);
        return clientes;
      }
      const clientes: Cliente[] = [];
      localStorage.setItem(Customer.REPO_CLIENTES, JSON.stringify(clientes));
      return clientes;
    }
}

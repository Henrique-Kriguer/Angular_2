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

    buscarClientePorId(id: string) : Cliente | undefined {
      const clientes = this.obterStorage();
      return clientes.find(cliente => cliente.id === id)
    }

    atualizar(cliente: Cliente){
      const storage = this.obterStorage();
      storage.forEach(customerStorage => {
        if(customerStorage.id === cliente.id){
          Object.assign(customerStorage, cliente);
        }
      })
      localStorage.setItem(Customer.REPO_CLIENTES, JSON.stringify(storage));
    }

    deletar(cliente: Cliente){
      const storage = this.obterStorage();

      const novaLista = storage.filter( clienteStorage => clienteStorage.id !== cliente.id)

      localStorage.setItem(Customer.REPO_CLIENTES, JSON.stringify(novaLista));
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

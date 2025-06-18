import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ItemLista } from './itemlista'
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'listaCompras';

  item: string = '';
  lista: ItemLista[] = [];

  adicionarItem() { 
    let itemlista = new ItemLista();
    itemlista.nome = this.item;
    itemlista.id = this.lista.length + 1; // Atribui um ID baseado no tamanho atual da lista
    this.lista.push(itemlista);
    this.item = ''; // Limpa o campo de entrada após adicionar o item

}
  riscarItem(itemlista: ItemLista) {
    itemlista.comprado = !itemlista.comprado; // Alterna o estado de comprado (true/false)
  }
  limparLista() {
    this.lista = []; // Limpa a lista de compras
  }
}

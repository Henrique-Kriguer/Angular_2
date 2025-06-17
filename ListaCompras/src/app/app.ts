import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'listaCompras';
  item: string = '';

  adicionarItem() {
    console.log('Item adicionado:', this.item);
    this.item = ''; // Limpa o campo de entrada após adicionar o item
  }
}

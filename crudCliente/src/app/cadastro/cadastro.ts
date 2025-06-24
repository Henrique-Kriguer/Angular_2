import { Component } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

import { RouterLink } from '@angular/router';
import { MatIcon } from '@angular/material/icon';
import { MatLabel } from '@angular/material/form-field';
import { Cliente } from './cliente';
@Component({
  selector: 'app-cadastro',
  imports: [
            FlexLayoutModule,
            MatCardModule,
            MatFormFieldModule,
            MatToolbarModule,
            MatInputModule,
            MatIconModule,
            MatButtonModule,
            FormsModule,
            MatLabel,
            RouterOutlet,
            RouterLink,
            MatIcon,
  ],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.scss'
})
export class Cadastro {

  cliente: Cliente = Cliente.newCliente()

  salvar() {
    console.log('Dados Cliente: ', this.cliente);
  }
}

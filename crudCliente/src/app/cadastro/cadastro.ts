import { Component, OnInit } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterOutlet } from '@angular/router';

import { RouterLink } from '@angular/router';
import { MatIcon } from '@angular/material/icon';
import { MatLabel } from '@angular/material/form-field';
import { Cliente } from './cliente';
import { Customer } from '../customer'; 

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
export class Cadastro implements OnInit {

  cliente: Cliente = Cliente.newCliente();
  atualizando: boolean = false;

  constructor( 
    private service: Customer,
    private route: ActivatedRoute  ) {

  }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe( (query: any) => {
      const params = query['params']
      const id = params['id']
      if(id){
        let clienteEncontrado = this.service.buscarClientePorId(id);
        if(clienteEncontrado){
          this.atualizando = true;
          this.cliente = clienteEncontrado;
        }
      }
    })
  }
  salvar() {
    this.service.salvar(this.cliente);
    this.cliente = Cliente.newCliente();
  }
}

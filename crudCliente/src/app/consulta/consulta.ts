import { Component, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { Customer } from '../customer';
import { Cliente } from '../cadastro/cliente';



@Component({
  selector: 'app-consulta',
  imports: [
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    FlexLayoutModule,
    FormsModule
  ],
  templateUrl: './consulta.html',
  styleUrl: './consulta.scss'
})
export class Consulta implements OnInit {

  listaClientes: Cliente[] = [];

  constructor(private service: Customer) { 

  }
  ngOnInit() {
   this.listaClientes = this.service.pesquisarClientes("");
   
}
}


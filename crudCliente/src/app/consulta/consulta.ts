import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { Customer } from '../customer';
import { Cliente } from '../cadastro/cliente';
import { Router } from '@angular/router';



@Component({
  selector: 'app-consulta',
  imports: [
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    FlexLayoutModule,
    FormsModule,
    CommonModule
  ],
  templateUrl: './consulta.html',
  styleUrl: './consulta.scss'
})
export class Consulta implements OnInit {

  nomeBusca: string = "";
  listaClientes: Cliente[] = [];
  colunasTable: string[] = ['cpf','dataNascimento','nome', 'telefone', 'email', 'acoes'];

  constructor(
    private service: Customer,
    private router: Router
  ) { 

  }
  ngOnInit() {
    //console.log('lista de clientes : ')
    //console.log(this.listaClientes);
   this.listaClientes = this.service.pesquisarClientes("");
   
  }

  pesquisar(){
    this.listaClientes = this.service.pesquisarClientes(this.nomeBusca)
  }
  preparaEditar(id: string){
    //console.log("ID Recebido ", id)
    this.router.navigate(['/cadastro'], { queryParams: {"id":id}})
  }
}


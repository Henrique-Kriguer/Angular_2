import { Component, OnInit, inject } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar'
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSelectChange, MatSelectModule} from '@angular/material/select';
import { MatIcon } from '@angular/material/icon';
import { MatLabel } from '@angular/material/form-field';
import { Cliente } from './cliente';
import { Customer } from '../customer'; 
import { NgxMaskDirective, provideNgxMask} from 'ngx-mask';
import { Estado} from '../brasilapiModels';
import { Municipio } from '../brasilapiModels';
import { Brasilapi } from '../brasilapi';
import { CommonModule } from '@angular/common';
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
            MatIcon,
            NgxMaskDirective,
            MatSelectModule,
            CommonModule
  ],
  providers: [ provideNgxMask()],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.scss'
})
export class Cadastro implements OnInit {

  cliente: Cliente = Cliente.newCliente();
  atualizando: boolean = false;
  snack: MatSnackBar = inject(MatSnackBar);
  estados: Estado[] = [];
  municipios: Municipio[] = [];


  constructor( 
    private service: Customer,
    private Brasilapi: Brasilapi,
    private route: ActivatedRoute,
    private router: Router   
  ) {

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
    this.carregarUFs();
  }
  carregarUFs(){
    this.Brasilapi.listarUFs().subscribe({
      next: listaEstados => this.estados = listaEstados,
      error: erro => console.log("ocorreu um erro: ", erro)
    })
  }
  carregarMunicipios(event: MatSelectChange){
    const ufSelecionada = event.value;
    this.Brasilapi.listarMunicipios(ufSelecionada).subscribe({
      next: listaMunicipios => this.municipios = listaMunicipios,
      error: erro => console.log("ocorreu um erro: ", erro)
    })
  }

  salvar() {
    if(!this.atualizando){
      this.service.salvar(this.cliente);
      this.cliente = Cliente.newCliente();
      this.mostrarMensagem("Salvo com sucesso!")
    } else {
      this.service.atualizar(this.cliente);
      this.router.navigate(['/consulta'])
      this.mostrarMensagem("Atualizado com sucesso!")
    }
    
  }

  mostrarMensagem(mensagem: string){
    this.snack.open(mensagem, "ok")
  }
}



import { Component } from '@angular/core';
import{ FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-categoria',
  standalone: false,
  templateUrl: './categoria.html',
  styleUrl: './categoria.scss'
})
export class Categoria {
  camposForm: FormGroup;

  constructor(){
    this.camposForm = new FormGroup({
        nome: new FormControl('', Validators.required ),
        descricao: new FormControl('', Validators.required)
    });
  }

  salvar(){
    this.camposForm.markAllAsTouched();
    console.log('valores digitados: ', this.camposForm.value)
    console.log('Esta valido?', this.camposForm.valid)
  }

  isCampoInvalido(nomeCampo: string) : boolean{
    const campo = this.camposForm.get(nomeCampo)
    return (campo?.invalid && campo.touched && campo.errors?.['required']) || false;
  }
}

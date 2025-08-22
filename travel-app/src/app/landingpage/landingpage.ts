import { Component } from '@angular/core';
import { Profile } from './profile.model';
import { Router } from '@angular/router';
import { NgIf} from '@angular/common';
import { Authgoogle } from '../authgoogle';

@Component({
  selector: 'app-landingpage',
  standalone: false,
  templateUrl: './landingpage.html',
  styleUrl: './landingpage.scss'
})
export class Landingpage {

  profile: Profile | undefined;

  constructor(private router: Router,
              private loginService: Authgoogle
  ){

  }

  navegar(){
    this.router.navigate(['/paginas/galeria']);
  }

  logarComGoogle(){
      this.loginService.login();
  }

  isLoggedIn(): boolean{
    const dadosGoogle = this.loginService.getLoggedProfile();
    console.log("Dados Google: ", dadosGoogle);
    this.profile = dadosGoogle;
    return !!this.profile;
  }
}

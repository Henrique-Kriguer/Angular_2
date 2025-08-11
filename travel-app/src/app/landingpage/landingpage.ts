import { Component } from '@angular/core';
import { Profile } from './profile.model';
import { Router } from '@angular/router';
import { NgIf} from '@angular/common';

@Component({
  selector: 'app-landingpage',
  standalone: false,
  templateUrl: './landingpage.html',
  styleUrl: './landingpage.scss'
})
export class Landingpage {

  profile: Profile | undefined;

  constructor(private router: Router){

  }

  navegar(){
    this.router.navigate(['/paginas/galeria']);
  }

  logarComGoogle(){

  }

  isLoggedIn(): boolean{
    return !!this.profile;
  }
}

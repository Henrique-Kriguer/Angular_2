import { Component, OnInit } from '@angular/core';
import { LayoutProps } from './layoutprops';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, map } from 'rxjs'
import { Authgoogle } from '../../authgoogle';

@Component({
  selector: 'app-layout',
  standalone: false,
  templateUrl: './layout.html',
  styleUrl: './layout.scss'
})
export class Layout implements OnInit{
  props: LayoutProps = { titulo: '', subTitulo: ''};

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private loginService: Authgoogle
  ){}

  ngOnInit(): void {
    this.router.events
      .pipe(
        filter (() => this.activatedRoute.firstChild !== null),
        map( () => this.obterPropriedadeLayout() )
      ).subscribe( (props: LayoutProps) => this.props = props)
  }

  obterPropriedadeLayout() : LayoutProps {
    let rotaFilha = this.activatedRoute.firstChild;

    while(rotaFilha?.firstChild){
      rotaFilha = rotaFilha.firstChild;
    }
    return rotaFilha?.snapshot.data as LayoutProps
  }

  logout(){
    this.loginService.logout
  }
}

import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Entidade } from './model/entidades.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../../src/styles.css', './app.component.css']
})
export class AppComponent {
  title = 'Controle Financeiro';

  constructor(private router: Router) {}
  
    navigateTo(route: string) {
      this.router.navigate([route]);    
  }

  entidadesArray: Entidade[] = [];








}


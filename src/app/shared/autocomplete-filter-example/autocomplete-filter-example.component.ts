import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {NgFor, AsyncPipe} from '@angular/common';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Entidade } from './../../model/entidades.component';

@Component({
  selector: 'autocomplete',
  templateUrl: 'autocomplete-filter-example.component.html',
  styleUrls: [ 'autocomplete-filter-example.component.css'],
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    NgFor,
    AsyncPipe
  ],
})
export class AutocompleteFilterExample implements OnInit {
    
  @Input() entidades: Entidade[] = [];
  @Output() entidadeSelecionada = new EventEmitter<Entidade>(); 
  
  /*
  @Input() elementToEdit: any;
  @Output() elementToEditChange = new EventEmitter<any>(); 
  */

  razoes: string[] = [];
  myControl = new FormControl('');
  filteredOptions?: Observable<string[]>;
  
  ngOnInit() {    
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
    this.razoes = this.entidades.map(entidade => entidade.razaosocial);
    this.myControl.valueChanges.subscribe(value => {
      const entidade = this.entidades.find(entidade => entidade.razaosocial === value); 
      if (entidade) {      
        this.entidadeSelecionada.emit(entidade);          
      }}
    );
  }
  
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.razoes.filter(option => option.toLowerCase().includes(filterValue));
  }
    
  /*
  displayFn(entidade: any): string {
    return entidade && entidade.razaosocial ? entidade.razaosocial : '';
  }
  */

  /*
  updateEntidade(newValue: any) {
    this.elementToEdit = newValue;
    this.elementToEditChange.emit(newValue);
  }
  */



  limpar() {
    // Limpe o controle do formulário
    this.myControl.reset();
  
    // Emita um evento com uma nova instância de Entidade
    this.entidadeSelecionada.emit(new Entidade());
  }

  /*
  entidadeParaExibir(localEnt: Entidade) {
    console.log('setRazaosocial recebeu ' +localEnt.razaosocial);
    this.myControl.setValue(localEnt.razaosocial);
  } 
  */ 

  getValor(): string {
    const value = this.myControl.value;
    return value ? value.toString() : '';
 }
 

}


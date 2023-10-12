import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { Entidade } from 'src/app/model/entidades.component';

/**
 * @title Table with sticky header
 */
@Component({
  selector: 'app-table2',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  standalone: true,
  imports: [MatTableModule],
})
export class TableComponent2 {
  displayedColumns = ['identidade', 'razaosocial', 'classe', 'subclasse', 'tipo', 'selecionar'];
  @Input() dataSource: any[] = [];
  @Output() entidadeSelecionada = new EventEmitter<Entidade>();  

  entidade: Entidade = new Entidade();

  constructor() {};

  selecionarEntidade(element: Entidade): void {
    this.entidadeSelecionada.emit(element);
    console.log(element);
  }

  ngOnInit() {}

}

/*

  

  //entidades: Entidade[] = [];

export interface PeriodicElement {
  razaoSocial: string;
  id_entidade: number;
  classe: number;
  subClasse: string;
  tipo: string;
  selecionar: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id_entidade: 1, razaoSocial: 'Hydrogen', classe: 1.0079, subClasse: 'H', tipo: 'n', selecionar: 'botão'},
  {id_entidade: 2, razaoSocial: 'Helium', classe: 4.0026, subClasse: 'He', tipo: 'n', selecionar: 'botão'},
  {id_entidade: 3, razaoSocial: 'Lithium', classe: 6.941, subClasse: 'FORNECEDORES', tipo: 'n', selecionar: 'botão'},
  {id_entidade: 4, razaoSocial: 'Beryllium', classe: 9.0122, subClasse: 'Be', tipo: 'nFORNECEDORES', selecionar: 'botão'},
  {id_entidade: 5, razaoSocial: 'Boron', classe: 10.811, subClasse: 'B', tipo: 'n', selecionar: 'botão'},
  {id_entidade: 6, razaoSocial: 'Carbon', classe: 1000000000002.0107, subClasse: 'C', tipo: 'n', selecionar: 'botão'},
  {id_entidade: 7, razaoSocial: 'Nitrogen', classe: 14.0067, subClasse: 'N', tipo: 'n', selecionar: 'botão'},
  {id_entidade: 8, razaoSocial: 'Oxygen', classe: 15.9994, subClasse: 'O', tipo: 'n', selecionar: 'botão'},
  {id_entidade: 9, razaoSocial: 'Fluorine', classe: 18.9984, subClasse: 'F', tipo: 'n', selecionar: 'botão'},
  {id_entidade: 10, razaoSocial: 'Neon', classe: 20.1797, subClasse: 'Ne', tipo: 'n', selecionar: 'botão'},
];
*/
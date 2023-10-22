import {CUSTOM_ELEMENTS_SCHEMA, Component, EventEmitter, Input, Output} from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {NgFor} from '@angular/common';
import { Entidade } from 'src/app/model/entidades.component';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.css'],
    standalone: true,
    imports: [MatTableModule, NgFor, MatButtonModule, MatIconModule]
})
export class TableComponent {
  @Input() displayedColumns: any[] = [];
  @Input() dataSource: any[] = [];
  @Input() entidadesArray: Entidade[] = [];
  @Output() elementSelected = new EventEmitter<any>();   

  columns:any[] = [];

  constructor() {};

  selecionarElement(element: any): void {
    this.elementSelected.emit(element);  
  }
  
  achaRazao(p: any): string {
    let razao: string = this.entidadesArray.find(e => e.identidade === p)?.razaosocial!;    
    //console.log(p);
    return razao ;
  }

  ngOnInit() {      
    // Limpa o array columns
    this.columns = [];
  
     // Preenche o array columns dinamicamente
     for (let column of this.displayedColumns) {
      this.columns.push({
        columnDef: column,
        header: column,
        cell: (element: any) => {
          if (column === 'identidade') {
            return this.achaRazao(element[column]);            
          } else {
            return `${element[column]}`;
          }
        }
      });
    }
    this.displayedColumns.push('selecionar');
    //console.log(this.dataSource);
  }      

}

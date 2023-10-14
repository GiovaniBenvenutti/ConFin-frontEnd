import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {NgFor} from '@angular/common';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  standalone: true,
  imports: [MatTableModule, NgFor],
})
export class TableComponent {
  @Input() displayedColumns: any[] = [];
  @Input() dataSource: any[] = [];
  @Output() elementSelected = new EventEmitter<any>();  

  columns:any[] = [];

  constructor() { };  

  selecionarElement(element: any): void {
    this.elementSelected.emit(element);    
  }

  ngOnInit() {   
    // Limpa o array columns
    this.columns = [];
  
    // Preenche o array columns dinamicamente
    for (let column of this.displayedColumns) {
      this.columns.push({
        columnDef: column,
        header: column,
        cell: (element: any) => `${element[column]}`
      });
    }

    this.displayedColumns.push('selecionar');

  }  

}

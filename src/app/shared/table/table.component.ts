import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatTable, MatTableModule} from '@angular/material/table';
import {NgForOf, NgFor} from '@angular/common';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  standalone: true,
  imports: [MatTableModule],
})
export class TableComponent {
  @Input() displayedColumns: any[] = [];
  @Input() dataSource: any[] = [];
  @Output() elementSelected = new EventEmitter<any>();  

  constructor() { };  

  selecionarElement(element: any): void {
    this.elementSelected.emit(element);    
  }

  ngOnInit() {
    this.displayedColumns.push('selecionar'); 
  }

  columns = [
    {
      columnDef: this.displayedColumns[0],
      header: 'classe',
      cell: this.dataSource[0]
    },
    
    {
      columnDef: this.displayedColumns[1],
      header: 'subclasse',
      cell: this.dataSource[1]
    }
  ];

}



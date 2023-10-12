import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  standalone: true,
  imports: [MatTableModule],
})
export class TableComponent {
  /*@Input()*/ displayedColumns: string[] = ['identidade', 'razaosocial', 'classe', 'subclasse', 'tipo'];
  @Input() dataSource: any[] = [];
  @Output() entidadeSelecionada = new EventEmitter<any>();  

  constructor() {};

  

  selecionarElement(element: any): void {
    this.entidadeSelecionada.emit(element);
  }

  ngOnInit() {
    this.displayedColumns.push('selecionar');
  }

}

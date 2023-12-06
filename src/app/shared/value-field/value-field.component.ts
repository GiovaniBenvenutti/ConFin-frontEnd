import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

/** @title Form field with prefix & suffix */
@Component({
  selector: 'app-value-field',
  templateUrl: './value-field.component.html',
  styleUrls: ['./value-field.component.css'],
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, FormsModule],
})
export class ValueFieldComponent {
  hide = false; //true;

  @Input() valorlevantado: number = 0;
  @Output() valornovo = new EventEmitter<number>();


  ngOnInit() {
    if (this.valorlevantado != 0) {      
      this.valornovo.emit(this.valorlevantado);          
    }
  }

  onValueChange(novoValor: number) {  
    this.valornovo.emit(novoValor);   
  }

  
}

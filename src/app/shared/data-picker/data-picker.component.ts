import {Component, EventEmitter, Input, Output, forwardRef} from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-data-picker',
  templateUrl: './data-picker.component.html',
  styleUrls: ['./data-picker.component.css'],
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DataPickerComponent),
      multi: true
    }
  ]
})
export class DataPickerComponent implements ControlValueAccessor {
  @Output() dataLevantamento = new EventEmitter<Date>(); 
  @Input() data: Date = new Date();
  
  minDate: Date;
  maxDate: Date;
  ValueFieldComponent!: Date;
  static ValueFieldComponent: Date;

  constructor() {
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 50, 0, 1);
    this.maxDate = new Date(currentYear + 10, 11, 31);
  }

  ngOnInit(){
    this.data = DataPickerComponent.ValueFieldComponent;
    if(this.data){
      this.emitData();
    }
  }

  emitData(): void {
    this.dataLevantamento.emit(this.data);
  }

  // Métodos da interface ControlValueAccessor
  writeValue(obj: any): void {
    this.data = obj;
  }

  registerOnChange(fn: any): void {
    this.dataLevantamento.subscribe(fn);
  }

  registerOnTouched(fn: any): void {
    // Você pode implementar este método se precisar
  }

  setDisabledState?(isDisabled: boolean): void {
    // Você pode implementar este método se precisar
  }
}

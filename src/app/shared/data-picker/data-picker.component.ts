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
  imports: [MatFormFieldModule, MatInputModule, MatNativeDateModule, MatDatepickerModule],
})
export class DataPickerComponent implements ControlValueAccessor {
  @Input() dataDoLevantameto: Date = new Date();  
  @Output() dataSelecionada = new EventEmitter<Date>();

  // Função para armazenar a alteração do valor
  private onChange = (value: any) => {};

  // Função para armazenar o toque no controle
  private onTouched = () => {};

  writeValue(value: any): void {
    this.dataDoLevantameto = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  // Método chamado quando a data é alterada
  onDateChange(event: Date) {
    this.dataDoLevantameto = event;
    this.onChange(event.valueOf);
    this.onTouched();
  }
}
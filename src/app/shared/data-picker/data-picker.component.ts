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
export class DataPickerComponent {

  @Input() dataDoLevantameto: Date = new Date();  
  @Output() dataSelecionada = new EventEmitter<string>(); 

  onDateChange(event: { value: string | undefined; }) {
    this.dataSelecionada.emit(event.value);
  }

}
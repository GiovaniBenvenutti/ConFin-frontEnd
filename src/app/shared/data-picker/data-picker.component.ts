import {Component, EventEmitter, Inject, Input, OnInit, Output, forwardRef} from '@angular/core';
import {MatNativeDateModule} from '@angular/material/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

import {
  MAT_MOMENT_DATE_FORMATS,
  MomentDateAdapter,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
} from '@angular/material-moment-adapter';

import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule, MatDatepickerIntl} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import 'moment/locale/ja';
import 'moment/locale/fr';
import { ControlValueAccessor, FormsModule } from '@angular/forms';


@Component({
  selector: 'app-data-picker',
  templateUrl: './data-picker.component.html',
  styleUrls: ['./data-picker.component.css'],
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatNativeDateModule, MatDatepickerModule, FormsModule,
            MatFormFieldModule, MatInputModule, MatDatepickerModule, MatButtonModule],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'ja-JP'},
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
  ],
})


export class DataPickerComponent implements ControlValueAccessor, OnInit {
  @Input() dataDoLevantameto: Date = new Date();  
  @Output() dataSelecionada = new EventEmitter<Date>();

  constructor(private _adapter: DateAdapter<any>,
      private _intl: MatDatepickerIntl,
      @Inject(MAT_DATE_LOCALE) private _locale: string) { }


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

  onDateChange(event: MatDatepickerInputEvent<Date>) {
    if (event.value != undefined) {   
      this.dataDoLevantameto = event.value;
      this.onChange(event.value);
      this.onTouched();
      this.dataSelecionada.emit(this.dataDoLevantameto);
    }
  }
  
  formataData() {
    this._locale = 'br';
    this._adapter.setLocale(this._locale);
  }

  getDateFormatString(): string {
    if (this._locale === 'br') {
      return 'DD/MM/YYYY';
    }
    return '';
  }  
  
  ngOnInit() {
    this.formataData();
  }
}













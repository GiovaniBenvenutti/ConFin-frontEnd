
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule, HttpInterceptor } from '@angular/common/http';
import { PrincipalEntidadeComponent } from './faces/entidade/entidades.cadastrar';
import { PrincipalPatrimonioComponent } from './faces/patrimonio/patrimonio.cadastrar';

import { SearchBoxComponent } from './shared/search-box/search-box.component';

import { TableComponent } from './shared/table/table.component';
import { TableComponent2 } from './shared/table2/table2.component';
import {MatTableModule} from '@angular/material/table';

import { AuthComponent } from './servico/auth/auth.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { AutocompleteFilterExample } from './shared/autocomplete-filter-example/autocomplete-filter-example.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { InitialScreenComponent } from './faces/initial-screen/initial-screen.component';

import { DataPickerComponent } from './shared/data-picker/data-picker.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';

import { TextFieldComponent } from './shared/text-field/text-field.component';
import {MatInputModule} from '@angular/material/input';

import { ValueFieldComponent } from './shared/value-field/value-field.component';
import {MatFormFieldModule} from '@angular/material/form-field';

import { PasswordComponent } from './shared/password/password.component';

import { MyButtonComponent } from './shared/my-button/my-button.component';
import {MatButtonModule} from '@angular/material/button';

import { SelectDropComponent } from './shared/select-drop/select-drop.component';
import {MatSelectModule} from '@angular/material/select';

import { ToolTipComponent } from './shared/tool-tip/tool-tip.component';
import {MatTooltipModule} from '@angular/material/tooltip';

import { SpinnerComponent } from './shared/spinner/spinner.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { CardBoxComponent } from './shared/card-box/card-box.component';
import { MatCardModule } from '@angular/material/card';

import { DialogBoxComponent } from './shared/dialog-box/dialog-box.component';
import {MatDialogModule} from '@angular/material/dialog';
import { LoadingInterceptor } from './servico/loading.interceptor';
import { ErrorInterceptor } from './servico/error.interceptor';

import { DatePipe } from '@angular/common';
//import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  declarations: [
    AppComponent,    
    PrincipalEntidadeComponent,
    PrincipalPatrimonioComponent,
    InitialScreenComponent,    
    AuthComponent,  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    SearchBoxComponent,
    AutocompleteFilterExample,
    MatAutocompleteModule,

    DataPickerComponent, MatDatepickerModule, MatNativeDateModule,

    CardBoxComponent, MatCardModule,

    DialogBoxComponent, MatDialogModule,

    MyButtonComponent, MatButtonModule,

    SelectDropComponent, MatSelectModule,

    SpinnerComponent,
    MatProgressSpinnerModule,

    TableComponent,
    TableComponent2,
    MatTableModule,

    TextFieldComponent,
    MatInputModule,

    ToolTipComponent,
    MatTooltipModule,

    ValueFieldComponent,
    MatFormFieldModule,
    PasswordComponent,
    
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true
    },     
    {
      provide: MAT_DATE_LOCALE, useValue: 'pt-BR',
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    },
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

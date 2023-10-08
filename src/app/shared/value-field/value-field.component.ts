import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

/** @title Form field with prefix & suffix */
@Component({
  selector: 'app-value-field',
  templateUrl: './value-field.component.html',
  styleUrls: ['./value-field.component.css'],
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule],
})
export class ValueFieldComponent {
  hide = false; //true;
}

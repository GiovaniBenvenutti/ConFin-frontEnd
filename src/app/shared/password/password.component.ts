import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'password',
  standalone: true,
  templateUrl: './password.component.html',
  styleUrl: './password.component.css',
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule]
})
export class PasswordComponent {

  hide = false; //true;
}

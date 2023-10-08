
import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';

/**
 * @title Button varieties
 */
@Component({
  selector: 'app-my-button',
  templateUrl: './my-button.component.html',
  styleUrls: ['./my-button.component.css'],
  standalone: true,
  imports: [MatButtonModule, MatTooltipModule, MatIconModule],
})
export class MyButtonComponent {}

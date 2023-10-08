import {Component} from '@angular/core';
import {MatCardModule} from '@angular/material/card';

/**
 * @title Card with media size
 */
@Component({
  selector: 'app-card-box',
  templateUrl: './card-box.component.html',
  styleUrls: ['./card-box.component.css'],
  standalone: true,
  imports: [MatCardModule],
})
export class CardBoxComponent {
  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;
}


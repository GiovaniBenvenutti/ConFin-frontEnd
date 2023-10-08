
import {Component} from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

/**
 * @title Dialog elements
 */
@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css'],
  standalone: true,
  imports: [MatButtonModule, MatDialogModule],
})
export class DialogBoxComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DialogBoxComponentDialog);
  }
}




@Component({
  selector: 'app-dialog-box-dialog',
  templateUrl: './dialog-box-dialog.component.html',
  styleUrls: ['./dialog-box-dialog.component.css'],
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
})
export class DialogBoxComponentDialog {}

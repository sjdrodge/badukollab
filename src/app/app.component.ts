import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'badukollab';
  boardSize = 19;

  setBoardSize(size: number) {
    this.boardSize = size;
  }
}

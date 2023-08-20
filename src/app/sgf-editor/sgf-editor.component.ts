import { Component } from '@angular/core';

@Component({
  selector: 'app-sgf-editor',
  templateUrl: './sgf-editor.component.html',
  styleUrls: ['./sgf-editor.component.scss'],
})
export class SgfEditorComponent {
  boardSize = 19;

  setBoardSize(size: number) {
    this.boardSize = size;
  }
}

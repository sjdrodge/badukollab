import { Component, Input, OnChanges } from '@angular/core';

enum IntersectionColor {
  Empty,
  Black,
  White,
}

class Intersection {
  color: IntersectionColor = IntersectionColor.Empty;
}

@Component({
  selector: 'app-goban',
  templateUrl: './goban.component.html',
  styleUrls: ['./goban.component.scss'],
})
export class GobanComponent implements OnChanges {
  @Input() size = 0;
  board: Intersection[][] = [];
  IntersectionColor = IntersectionColor;

  ngOnChanges() {
    this.board = [];
    for (let i = 0; i < this.size; i++) {
      this.board.push([]);
      for (let j = 0; j < this.size; j++) {
        this.board[i].push(new Intersection());
      }
    }
  }

  blackify(cell: Intersection) {
    if (cell.color == IntersectionColor.Black) {
      cell.color = IntersectionColor.Empty;
    } else {
      cell.color = IntersectionColor.Black;
    }
    return false;
  }

  whiteify(cell: Intersection) {
    if (cell.color == IntersectionColor.White) {
      cell.color = IntersectionColor.Empty;
    } else {
      cell.color = IntersectionColor.White;
    }
    return false;
  }
}

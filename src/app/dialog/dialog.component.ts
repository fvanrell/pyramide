import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import {} from "protractor";
import { Player } from "../../models/player";

@Component({
  selector: "app-dialog",
  templateUrl: "./dialog.component.html",
  styleUrls: ["./dialog.component.scss"],
})
export class DialogComponent implements OnInit {
  @Input() player: Player;
  @Input() isCorrect: number;
  @Input() roundNb: number;
  @Input() isLast: number;
  @Output() isClosed = new EventEmitter<boolean>();
  @Output() isOver = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit() {}

  close(bool: boolean) {
    if (this.isLast) {
      this.isClosed.emit(bool);
      this.isOver.emit(bool);
    } else {
      this.isClosed.emit(bool);
    }
  }
}

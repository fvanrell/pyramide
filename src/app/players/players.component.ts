import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { Card } from "../../models/card";
import { Player } from "../../models/player";

@Component({
  selector: "app-players",
  templateUrl: "./players.component.html",
  styleUrls: ["./players.component.scss"],
})
export class PlayersComponent implements OnInit {
  faExclamationCircle = faExclamationCircle;
  @Input() players: Player[];
  @Output() newPlayer = new EventEmitter<string>();
  showSpan = false;

  constructor() {}

  ngOnInit() {}

  emitName(value: string) {
    if (value === "" || value === " ") {
      console.log("yas");
      this.showSpan = true;
    } else {
      this.newPlayer.emit(value);
    }
  }

  checkName(value: string) {
    if (value === "" || value === " ") {
      this.showSpan = true;
    } else {
      this.showSpan = false;
    }
  }

  returnCard(card: Card) {
    if (card.shown) {
      card.shown = false;
    } else {
      card.shown = true;
    }
  }
}

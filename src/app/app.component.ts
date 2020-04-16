import { Component, OnInit } from "@angular/core";
import { Card } from "../models/card";
import { Player } from "../models/player";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  title = "Pyramide";
  players: Player[];
  deck: Card[];

  ngOnInit() {
    this.deck = [
      new Card(2, 1, 1, true),
      new Card(2, 2, 1, true),
      new Card(2, 3, 2, true),
      new Card(2, 4, 2, true),
      new Card(3, 1, 1, true),
      new Card(3, 2, 1, true),
      new Card(3, 3, 2, true),
      new Card(3, 4, 2, true),
      new Card(4, 1, 1, true),
      new Card(4, 2, 1, true),
      new Card(4, 3, 2, true),
      new Card(4, 4, 2, true),
      new Card(5, 1, 1, true),
      new Card(5, 2, 1, true),
      new Card(5, 3, 2, true),
      new Card(5, 4, 2, true),
      new Card(6, 1, 1, true),
      new Card(6, 2, 1, true),
      new Card(6, 3, 2, true),
      new Card(6, 4, 2, true),
      new Card(7, 1, 1, true),
      new Card(7, 2, 1, true),
      new Card(7, 3, 2, true),
      new Card(7, 4, 2, true),
      new Card(8, 1, 1, true),
      new Card(8, 2, 1, true),
      new Card(8, 3, 2, true),
      new Card(8, 4, 2, true),
      new Card(9, 1, 1, true),
      new Card(9, 2, 1, true),
      new Card(9, 3, 2, true),
      new Card(9, 4, 2, true),
      new Card(10, 1, 1, true),
      new Card(10, 2, 1, true),
      new Card(10, 3, 2, true),
      new Card(10, 4, 2, true),
      new Card(11, 1, 1, true),
      new Card(11, 2, 1, true),
      new Card(11, 3, 2, true),
      new Card(11, 4, 2, true),
      new Card(12, 1, 1, true),
      new Card(12, 2, 1, true),
      new Card(12, 3, 2, true),
      new Card(12, 4, 2, true),
      new Card(13, 1, 1, true),
      new Card(13, 2, 1, true),
      new Card(13, 3, 2, true),
      new Card(13, 4, 2, true),
      new Card(14, 1, 1, true),
      new Card(14, 2, 1, true),
      new Card(14, 3, 2, true),
      new Card(14, 4, 2, true),
    ];
  }

  addPlayer(value: string) {
    if (!this.players) {
      const newPlayer = new Player(1, value, [], null);
      this.players = [newPlayer];
    } else {
      const newPlayer = new Player(this.players.length + 1, value, [], null);
      this.players.push(newPlayer);
    }
  }
}

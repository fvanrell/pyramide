import { Component, Input, OnInit, ViewChild } from "@angular/core";
import { CountdownComponent } from "ngx-countdown";
//import { MatDialog } from "@angular/material" ;
import { Card } from "../../models/card";
import { Player } from "../../models/player";

@Component({
  selector: "app-game",
  templateUrl: "./game.component.html",
  styleUrls: ["./game.component.scss"],
})
export class GameComponent implements OnInit {
  @Input() deck: Card[];
  @Input() players: Player[];
  @ViewChild("cd") private countdown: CountdownComponent;
  currentSelectedAnswer: any;
  currentPlayer: Player;
  pyramideCards: Card[];
  title: string;
  roundNb: number;
  currentRoundNb: number;
  isCorrect: number;
  gameStarted = false;
  showCountdown = false;
  pyramide = false;
  dialog = false;
  isLast = false;
  cpt = 1;
  constructor() {}

  ngOnInit() {}

  returnCard(card: Card) {
    if (card.shown) {
      card.shown = false;
    } else {
      card.shown = true;
    }
  }

  shuffle(array) {
    let counter = array.length;

    while (counter > 0) {
      const index = Math.floor(Math.random() * counter);
      counter--;
      const temp = array[counter];
      array[counter] = array[index];
      array[index] = temp;
    }

    return array;
  }

  startGame(started: boolean) {
    this.gameStarted = true;
    if (started) {
      this.shuffle(this.deck);
      this.roundNb = 1;
      this.title = "Premier tour";
    }
  }

  closeModal(closed: boolean) {
    this.dialog = false;
  }

  launchPyramide(launched: boolean) {
    if (launched) {
      this.players.forEach((player) => {
        player.cards.sort((a, b) => a.rank - b.rank);
      });
      this.showCountdown = true;
      this.countdown.begin();
      this.title = "Mémorisez vos cartes";
    }
  }

  solveFirstRound(color) {
    this.currentRoundNb = 1;
    if (this.cpt < this.players.length) {
      this.currentPlayer = this.players.find(
        (player) => player.id === this.cpt
      );
      this.currentSelectedAnswer = color;
      this.currentPlayer.cards.push(this.deck[0]);
      this.deck = this.deck.slice(1, this.deck.length);
      if (this.currentPlayer.cards[0].color === this.currentSelectedAnswer) {
        this.isCorrect = 1;
        this.dialog = true;
      } else {
        this.isCorrect = 2;
        this.dialog = true;
      }
      this.cpt += 1;
    } else {
      this.currentPlayer = this.players.find(
        (player) => player.id === this.cpt
      );
      this.currentSelectedAnswer = color;
      this.currentPlayer.cards.push(this.deck[0]);
      this.deck = this.deck.slice(1, this.deck.length);
      if (this.currentPlayer.cards[0].color === this.currentSelectedAnswer) {
        this.isCorrect = 1;
        this.dialog = true;
      } else {
        this.isCorrect = 2;
        this.dialog = true;
      }
      this.cpt = 1;
      this.title = "Deuxième tour";
      this.roundNb = 2;
    }
  }

  solveSecondRound(value) {
    this.currentRoundNb = 2;
    if (this.cpt < this.players.length) {
      this.currentPlayer = this.players.find(
        (player) => player.id === this.cpt
      );
      this.currentSelectedAnswer = value;
      this.currentPlayer.cards.push(this.deck[0]);
      this.deck = this.deck.slice(1, this.deck.length);
      if (
        (this.currentSelectedAnswer &&
          this.currentPlayer.cards[1].rank >
            this.currentPlayer.cards[0].rank) ||
        (!this.currentSelectedAnswer &&
          this.currentPlayer.cards[1].rank < this.currentPlayer.cards[0].rank)
      ) {
        this.isCorrect = 1;
        this.dialog = true;
      } else if (
        this.currentPlayer.cards[0].rank === this.currentPlayer.cards[1].rank
      ) {
        this.isCorrect = 3;
        this.dialog = true;
      } else {
        this.isCorrect = 2;
        this.dialog = true;
      }
      this.cpt += 1;
    } else {
      this.currentPlayer = this.players.find(
        (player) => player.id === this.cpt
      );
      this.currentSelectedAnswer = value;
      this.currentPlayer.cards.push(this.deck[0]);
      this.deck = this.deck.slice(1, this.deck.length);
      if (
        (this.currentSelectedAnswer &&
          this.currentPlayer.cards[1].rank >
            this.currentPlayer.cards[0].rank) ||
        (!this.currentSelectedAnswer &&
          this.currentPlayer.cards[1].rank < this.currentPlayer.cards[0].rank)
      ) {
        this.isCorrect = 1;
        this.dialog = true;
      } else if (
        this.currentPlayer.cards[0].rank === this.currentPlayer.cards[1].rank
      ) {
        this.isCorrect = 3;
        this.dialog = true;
      } else {
        this.isCorrect = 2;
        this.dialog = true;
      }
      this.cpt = 1;
      this.roundNb = 3;
      this.title = "Troisème tour";
    }
  }

  solveThirdRound(value) {
    this.currentRoundNb = 3;
    if (this.cpt < this.players.length) {
      this.currentPlayer = this.players.find(
        (player) => player.id === this.cpt
      );
      const ranks = this.currentPlayer.cards.map((card) => card.rank);
      const sortedRanks = ranks.sort((a, b) => a - b);
      this.currentSelectedAnswer = value;
      this.currentPlayer.cards.push(this.deck[0]);
      this.deck = this.deck.slice(1, this.deck.length);
      if (
        this.currentSelectedAnswer &&
        sortedRanks[0] < this.currentPlayer.cards[2].rank &&
        this.currentPlayer.cards[2].rank < sortedRanks[1]
      ) {
        this.isCorrect = 1;
        this.dialog = true;
      } else if (
        !this.currentSelectedAnswer &&
        (sortedRanks[0] > this.currentPlayer.cards[2].rank ||
          this.currentPlayer.cards[2].rank > sortedRanks[1])
      ) {
        this.isCorrect = 1;
        this.dialog = true;
      } else if (
        sortedRanks[0] === this.currentPlayer.cards[2].rank ||
        sortedRanks[1] === this.currentPlayer.cards[2].rank
      ) {
        this.isCorrect = 3;
        this.dialog = true;
      } else {
        this.isCorrect = 2;
        this.dialog = true;
      }
      this.cpt += 1;
    } else {
      this.currentPlayer = this.players.find(
        (player) => player.id === this.cpt
      );
      const ranks = this.currentPlayer.cards.map((card) => card.rank);
      const sortedRanks = ranks.sort((a, b) => a - b);
      this.currentSelectedAnswer = value;
      this.currentPlayer.cards.push(this.deck[0]);
      this.deck = this.deck.slice(1, this.deck.length);
      if (
        this.currentSelectedAnswer &&
        sortedRanks[0] < this.currentPlayer.cards[2].rank &&
        this.currentPlayer.cards[2].rank < sortedRanks[1]
      ) {
        this.isCorrect = 1;
        this.dialog = true;
      } else if (
        !this.currentSelectedAnswer &&
        (sortedRanks[0] > this.currentPlayer.cards[2].rank ||
          this.currentPlayer.cards[2].rank > sortedRanks[1])
      ) {
        this.isCorrect = 1;
        this.dialog = true;
      } else if (
        sortedRanks[0] === this.currentPlayer.cards[2].rank ||
        sortedRanks[1] === this.currentPlayer.cards[2].rank
      ) {
        this.isCorrect = 3;
        this.dialog = true;
      } else {
        this.isCorrect = 2;
        this.dialog = true;
      }
      this.cpt = 1;
      this.roundNb = 4;
      this.title = "Dernier tour";
    }
  }

  async solveFourthRound(suit) {
    this.currentRoundNb = 4;
    if (this.cpt < this.players.length) {
      this.currentPlayer = this.players.find(
        (player) => player.id === this.cpt
      );
      this.currentSelectedAnswer = suit;
      this.currentPlayer.cards.push(this.deck[0]);
      this.deck = this.deck.slice(1, this.deck.length);
      if (this.currentPlayer.cards[3].suit === this.currentSelectedAnswer) {
        if (
          this.currentPlayer.cards[0].rank ===
            this.currentPlayer.cards[3].rank ||
          this.currentPlayer.cards[1].rank ===
            this.currentPlayer.cards[3].rank ||
          this.currentPlayer.cards[2].rank === this.currentPlayer.cards[3].rank
        ) {
          this.isCorrect = 4;
          this.dialog = true;
        } else {
          this.isCorrect = 1;
          this.dialog = true;
        }
      } else {
        if (
          this.currentPlayer.cards[0].rank ===
            this.currentPlayer.cards[3].rank ||
          this.currentPlayer.cards[1].rank ===
            this.currentPlayer.cards[3].rank ||
          this.currentPlayer.cards[2].rank === this.currentPlayer.cards[3].rank
        ) {
          this.isCorrect = 5;
          this.dialog = true;
        } else {
          this.isCorrect = 2;
          this.dialog = true;
        }
      }
      this.cpt += 1;
    } else {
      this.isLast = true;
      this.currentPlayer = this.players.find(
        (player) => player.id === this.cpt
      );
      this.currentSelectedAnswer = suit;
      this.currentPlayer.cards.push(this.deck[0]);
      this.deck = this.deck.slice(1, this.deck.length);
      if (this.currentPlayer.cards[3].suit === this.currentSelectedAnswer) {
        if (
          this.currentPlayer.cards[0].rank ===
            this.currentPlayer.cards[3].rank ||
          this.currentPlayer.cards[1].rank ===
            this.currentPlayer.cards[3].rank ||
          this.currentPlayer.cards[2].rank === this.currentPlayer.cards[3].rank
        ) {
          this.isCorrect = 4;
          this.dialog = true;
        } else {
          this.isCorrect = 1;
          this.dialog = true;
        }
      } else {
        if (
          this.currentPlayer.cards[0].rank ===
            this.currentPlayer.cards[3].rank ||
          this.currentPlayer.cards[1].rank ===
            this.currentPlayer.cards[3].rank ||
          this.currentPlayer.cards[2].rank === this.currentPlayer.cards[3].rank
        ) {
          this.isCorrect = 5;
          this.dialog = true;
        } else {
          this.isCorrect = 2;
          this.dialog = true;
        }
      }
      this.roundNb = null;
    }
  }

  onCountdownOver() {
    this.showCountdown = false;
    this.players.forEach((player) => {
      player.cards.map((card) => {
        card.shown = false;
      });
    });
    this.pyramideCards = this.deck.slice(0, 15).map((card) => {
      card.shown = false;
      return card;
    });
    this.title = "Pyramide Time !";
    this.pyramide = true;
  }
}

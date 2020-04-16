import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-fourth-round",
  templateUrl: "./fourth-round.component.html",
  styleUrls: ["./fourth-round.component.scss"],
})
export class FourthRoundComponent implements OnInit {
  @Output() selectedSuit = new EventEmitter<number>();
  constructor() {}

  ngOnInit() {}

  sendAnswer(color: number) {
    this.selectedSuit.emit(color);
  }
}

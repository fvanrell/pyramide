import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-first-round",
  templateUrl: "./first-round.component.html",
  styleUrls: ["./first-round.component.scss"],
})
export class FirstRoundComponent implements OnInit {
  faCircle = faCircle;
  @Output() selectedColor = new EventEmitter<number>();
  constructor() {}

  ngOnInit() {}

  sendAnswer(color: number) {
    this.selectedColor.emit(color);
  }
}

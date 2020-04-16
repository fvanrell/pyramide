import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { faMinusCircle, faPlusCircle } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-second-round",
  templateUrl: "./second-round.component.html",
  styleUrls: ["./second-round.component.scss"],
})
export class SecondRoundComponent implements OnInit {
  faPlusCircle = faPlusCircle;
  faMinusCircle = faMinusCircle;
  @Output() selectedValue = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit() {}

  sendAnswer(value: boolean) {
    this.selectedValue.emit(value);
  }
}

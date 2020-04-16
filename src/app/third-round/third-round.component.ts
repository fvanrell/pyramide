import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-third-round",
  templateUrl: "./third-round.component.html",
  styleUrls: ["./third-round.component.scss"],
})
export class ThirdRoundComponent implements OnInit {
  faAngleLeft = faAngleLeft;
  faAngleRight = faAngleRight;
  @Output() selectedValue = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit() {}

  sendAnswer(value: boolean) {
    this.selectedValue.emit(value);
  }
}

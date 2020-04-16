import { NgModule } from "@angular/core";
import { MatGridList } from "@angular/material/grid-list";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { CountdownModule } from "ngx-countdown";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FirstRoundComponent } from "./first-round/first-round.component";
import { FourthRoundComponent } from "./fourth-round/fourth-round.component";
import { GameComponent } from "./game/game.component";
import { MenuComponent } from "./menu/menu.component";
import { PlayersComponent } from "./players/players.component";
import { SecondRoundComponent } from "./second-round/second-round.component";
import { ThirdRoundComponent } from "./third-round/third-round.component";
import { DialogComponent } from './dialog/dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayersComponent,
    GameComponent,
    MenuComponent,
    MatGridList,
    FirstRoundComponent,
    SecondRoundComponent,
    ThirdRoundComponent,
    FourthRoundComponent,
    DialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    CountdownModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

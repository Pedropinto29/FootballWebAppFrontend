import { Component } from '@angular/core';
import { GamesService, Game } from '../games.service';
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {
  games: Game[] = []
  constructor (private gamesService : GamesService) {}

  ngOnInit(){
    this.gamesService.getGamesList().subscribe(
      data => {
        this.games = data;
        console.log(this.games);
      }
    )
  }
}

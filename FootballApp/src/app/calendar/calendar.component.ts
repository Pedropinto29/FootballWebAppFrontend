import { Component } from '@angular/core';
import { GamesService, Game } from '../games.service';
import { MatDialog } from '@angular/material/dialog';
import { EditPopUpComponent } from '../edit-pop-up/edit-pop-up.component';
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {
  games: Game[] = []
  userType : string = ""
  gameId : number = 0
  constructor (private gamesService : GamesService, private dialogRef : MatDialog) {}

  ngOnInit(){
    this.gamesService.getGamesList().subscribe(
      data => {
        this.games = data.games;
        this.userType = data.admin;
        console.log(this.userType);
        console.log(this.games);
      }
    )
  }

  edit(game : any) {
    this.gameId = game.gameId
    console.log(this.gameId)
    console.log(this.games)
    this.dialogRef.open(EditPopUpComponent, {
      data:{gameId : this.gameId}
    })

  }
}


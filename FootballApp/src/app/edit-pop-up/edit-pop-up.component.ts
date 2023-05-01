import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Game, GamesService } from '../games.service';

@Component({
  selector: 'app-edit-pop-up',
  templateUrl: './edit-pop-up.component.html',
  styleUrls: ['./edit-pop-up.component.css']
})
export class EditPopUpComponent {
  game = new Game()
  router: any;
  constructor(public gameService : GamesService,@Inject(MAT_DIALOG_DATA) public data :any){}

  id = this.data.gameId
  ngOnInit() {
    console.log(this.id)
    this.gameService.getGame(this.id).subscribe(
      data => {
        this.game = data
        console.log(this.game)
      }
    )
  }
  editGame(newHomeScore : string, newAwayScore : string) {
    const home = parseInt(newHomeScore);
    const away = parseInt(newAwayScore);

    this.game.homeScore = home;
    this.game.awayScore = away;
    console.log(home, away);

    this.gameService.editGame(this.id, this.game).subscribe(
      data => {
        console.log("Game edited")
      }
    )
  }
}

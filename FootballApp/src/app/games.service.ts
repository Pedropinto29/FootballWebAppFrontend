import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export class Game {
  "gameId" : number;
  "homeTeam" : string;
  "awayTeam" : string;
  "homeScore" : string;
  "awayScore" : string;
  "competition" : string;
  "date" : string;
  "time" : string;
}

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  baseUrl : string = 'http://localhost:3000/api/'
  constructor( private http: HttpClient) { }

  getGamesList(): Observable <any> {
    return this.http.get(this.baseUrl + 'games')
  }
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export class Game {
  "gameId" : number;
  "homeTeam" : string;
  "awayTeam" : string;
  "homeScore" : number;
  "awayScore" : number;
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
    const headers = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Authorization' : `Bearer ${localStorage.getItem('token')}`
    })
    return this.http.get(this.baseUrl + 'games', {headers: headers})
  }

  editGame(id: number, game: Game) : Observable <any> {
    const headers = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Authorization' : `Bearer ${localStorage.getItem('token')}`
    })
    return this.http.put(this.baseUrl + 'game/' + id, game, {headers:headers})
  }

  getGame(id: number) : Observable <any> {
    const headers = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Authorization' : `Bearer ${localStorage.getItem('token')}`
    })
    return this.http.get(this.baseUrl + 'game/' + id, {headers: headers})
  }

}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export class Article {
  "articleId" : number;
  "title" : string;
  "subtitle": string;
  "body": string;
}

@Injectable({
  providedIn: 'root'
})

export class ArticleService {
  baseUrl: string = 'http://localhost:3000/api/'
  constructor( private http: HttpClient) { }

  getArticlesList(): Observable <any> {
    return this.http.get(this.baseUrl + 'articles');
  }

  getArticle(id:number): Observable <any>{
    return this.http.get(this.baseUrl + 'article/' + id);
  }

}

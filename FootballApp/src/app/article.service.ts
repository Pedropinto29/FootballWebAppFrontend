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
    const headers = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Authorization' : `Bearer ${localStorage.getItem('token')}`
    })
    return this.http.get(this.baseUrl + 'articles', {headers:headers});
  }

  getArticle(id:number): Observable <any>{
    return this.http.get(this.baseUrl + 'article/' + id);
  }

  postArticle(article:Article): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Authorization' : `Bearer ${localStorage.getItem('token')}`
    })
    return this.http.post(this.baseUrl + 'article', article, {headers: headers})
  }

  putArticle(id: number, article:Article): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Authorization' : `Bearer ${localStorage.getItem('token')}`
    })
    return this.http.put(this.baseUrl + 'article/' + id, article, {headers: headers})
  }

  deleteArticle(id:number) : Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Authorization' : `Bearer ${localStorage.getItem('token')}`
    })
    return this.http.delete(this.baseUrl + 'article/' + id, {headers: headers})
  }

}

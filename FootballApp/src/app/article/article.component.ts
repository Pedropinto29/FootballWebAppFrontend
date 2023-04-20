import { Component } from '@angular/core';
import { Article, ArticleService } from '../article.service';
import { HomeComponent } from '../home/home.component';
import { ActivatedRoute } from '@angular/router';
import { __values } from 'tslib';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {
  article = new Article()
  title:string = "";
  subtitle:string = "";
  body:string = "";

  constructor (private articleService: ArticleService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.articleService.getArticle(this.route.snapshot.params["id"]).subscribe(
      data => {
        this.article = data
        this.title = this.article.title
        this.subtitle = this.article.subtitle
        this.body = this.article.body
        console.log(this.body)
      }
    )
  }
}

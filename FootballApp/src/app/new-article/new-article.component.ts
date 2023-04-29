import { Component } from '@angular/core';
import { Article, ArticleService } from '../article.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.css']
})
export class NewArticleComponent {
  article = new Article()
  constructor(private articleService : ArticleService, private router: Router) {}

  writeArticle(title:string, subtitle:string, body:string){
    this.article.title = title;
    this.article.subtitle = subtitle;
    this.article.body = body;
    console.log(title,subtitle,body)

    this.articleService.postArticle(this.article).subscribe(
      data => {
        console.log("Article Posted");
      }
    )

    this.router.navigate(['home'])
  }
}

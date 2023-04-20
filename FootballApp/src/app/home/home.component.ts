import { Component } from '@angular/core';
import { ArticleService, Article } from '../article.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  articles: Article[] = []

  constructor (private articleService : ArticleService, private router:Router) {}

  ngOnInit() {
    this.articleService.getArticlesList().subscribe(
      data => {
        this.articles = data
        console.log(this.articles);
      }
    )
  }

  viewArticle(article:any){
    let articleId = article.articleId
    console.log(articleId)
    this.router.navigate(['article',articleId]);
  }
}

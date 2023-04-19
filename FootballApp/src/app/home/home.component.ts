import { Component } from '@angular/core';
import { ArticleService, Article } from '../article.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  articles: Article[] = []

  constructor (private articleService : ArticleService) {}

  ngOnInit() {
    this.articleService.getArticlesList().subscribe(
      data => {
        this.articles = data
        console.log(this.articles);
      }
    )
  }
}

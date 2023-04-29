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
  userType : string = ""

  constructor (private articleService : ArticleService, private router:Router) {}

  ngOnInit() {
    this.articleService.getArticlesList().subscribe(
      data => {
        this.articles = data.articles
        this.userType = data.admin
        console.log(this.articles);
        console.log(this.userType)
      }
    )
  }

  viewArticle(article:any){
    let articleId = article.articleId
    console.log(articleId)
    this.router.navigate(['article',articleId]);
  }

  newArticle(){
    this.router.navigate(['article'])
  }

  edit(article:any){
    let articleId = article.articleId
    this.router.navigate(['edit', articleId]);
  }

  delete(article:any){
    let articleId = article.articleId
    console.log(articleId);

    this.articleService.deleteArticle(articleId).subscribe(
      data => {
        console.log("Article Deleted");
      }
    )

    window.location.reload()
  }
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ProfileComponent } from './profile/profile.component';
import { ArticleComponent } from './article/article.component';
import { LoginComponent } from './login/login.component';
import { NewArticleComponent } from './new-article/new-article.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path:'login', component: LoginComponent},
  {path: 'home', component : HomeComponent },
  {path: 'calendar', component : CalendarComponent },
  {path: 'profile', component : ProfileComponent },
  {path: 'article/:id', component : ArticleComponent},
  {path: 'article', component : NewArticleComponent},
  {path: 'edit/:id',component: EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

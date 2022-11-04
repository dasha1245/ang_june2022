import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";

import {UsersComponent} from './components/users/users.component';
import {PostsComponent} from './components/posts/posts.component';
import {CommentsComponent} from './components/comments/comments.component';
import {HeaderComponent} from './components/header/header.component';
import {MainlayoutComponent} from './components/mainlayout/mainlayout.component';
import { UserComponent } from './components/user/user.component';
import { PostComponent } from './components/post/post.component';
import { CommentComponent } from './components/comment/comment.component';
import * as path from "path";
import { UserDetailsComponent } from './components/user-details/user-details.component';

const routes: Routes = [
  {
    path: '', component: MainlayoutComponent, children: [
      {
        path: 'users', component: UsersComponent, children:[
          {path: ':id', component: UserDetailsComponent}
        ]},
      {path: 'posts', component: PostsComponent},
      {path: 'comments', component: CommentsComponent}

    ]
  },
]

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    PostsComponent,
    CommentsComponent,
    HeaderComponent,
    MainlayoutComponent,
    UserComponent,
    PostComponent,
    CommentComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

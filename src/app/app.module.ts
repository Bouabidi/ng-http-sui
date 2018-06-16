import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SuiModule } from 'ng2-semantic-ui';

import { AppComponent } from './app.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostComponent } from './components/post/post.component';
import { PostFormComponent } from './components/post-form/post-form.component';

const appRoutes: Routes = [
  { path: 'posts', component: PostListComponent },
  { path: 'post/create', component: PostFormComponent },
  { path: 'post/:id', component: PostComponent },
  { path: 'post/edit/:id', component: PostFormComponent },
  { path: '', redirectTo: '/posts', pathMatch: 'full' },
]

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostComponent,
    PostFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    SuiModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

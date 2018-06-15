import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { SuiModule } from 'ng2-semantic-ui';

import { AppComponent } from './app.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostComponent } from './components/post/post.component';
import { PostFormComponent } from './components/post-form/post-form.component';

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostComponent,
    PostFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SuiModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

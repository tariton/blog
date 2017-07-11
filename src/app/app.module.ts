import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { RoutingModule } from './app-routing.module';

import { BlogService } from './providers/blog.service';

import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PostPageComponent } from './pages/post-page/post-page.component';
import { Error404PageComponent } from './pages/error-404-page/error-404-page.component';
import { HeaderComponent } from './components/header/header.component';
import { PostCardComponent } from './components/post-card/post-card.component';
import { PostsComponent } from './components/posts/posts.component';
import { FooterComponent } from './components/footer/footer.component';
import { PostComponent } from './components/post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PostPageComponent,
    Error404PageComponent,
    HeaderComponent,
    PostCardComponent,
    PostsComponent,
    FooterComponent,
    PostComponent
  ],
  imports: [
    RoutingModule,
    BrowserModule,
    HttpModule
  ],
  providers: [BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }

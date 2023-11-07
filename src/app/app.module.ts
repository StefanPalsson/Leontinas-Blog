import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { OwnerGuard } from './owner.guard';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    BlogPostComponent,
    AboutMeComponent,
    CreatePostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [OwnerGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

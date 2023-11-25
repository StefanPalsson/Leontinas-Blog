import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { OwnerGuard } from './owner.guard';

// Definierar rutter för din Angular-app
const routes: Routes = [
  // Omdirigerar tom URL ('') till hemsidan ('/home')
  { path: '', redirectTo: '/home', pathMatch: 'full' }, 

  // Rutt för hemsidan
  { path: 'home', component: HomeComponent },

  // Rutt för att visa ett specifikt blogginlägg baserat på ID
  { path: 'post/:id', component: BlogPostComponent },

  // Rutt för 'Om Mig'-sidan
  { path: 'about', component: AboutMeComponent },

  // Rutt för att skapa nya inlägg, endast tillgänglig för ägare
  { path: 'owner/create', component: CreatePostComponent, canActivate: [OwnerGuard] },
];

@NgModule({
  // Importerar RouterModule och dess rutter
  imports: [RouterModule.forRoot(routes)],
  // Gör RouterModule tillgänglig i hela appen
  exports: [RouterModule]
})
export class AppRoutingModule { }

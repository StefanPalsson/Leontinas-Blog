import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { OwnerGuard } from './owner.guard';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'post/:id', component: BlogPostComponent },
  { path: 'about', component: AboutMeComponent },
  // Ägarens vy för att skapa inlägg
  { path: 'owner/create', component: CreatePostComponent, canActivate: [OwnerGuard] },
  // Andra ägarens rutter...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


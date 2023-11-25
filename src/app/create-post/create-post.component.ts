import { Component } from '@angular/core';
import { PostService } from '../post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent {
  // Injectar PostService för hantering av blogginlägg och Router för navigering
  constructor(private postService: PostService, private router: Router) {}

  // Metod för att skapa ett nytt inlägg. Anropas när formuläret skickas.
  createPost(formValues: any): void {
    // Skapar ett nytt inläggsobjekt baserat på formulärets data
    const newPost = {
      title: formValues.title, // Titeln från formuläret
      thumbnailUrl: formValues.thumbnailUrl, // URL för miniatyrbilden
      body: formValues.content, // Innehållet i inlägget
      creationDate: new Date(), // Nuvarande datum som skapelsedatum
      likes: 0, // Startvärde för likes
      dislikes: 0, // Startvärde för dislikes
      comments: [] // Tom lista för kommentarer
    };
    
    // Lägger till det nya inlägget via PostService
    this.postService.addPost(newPost);
    // Navigerar tillbaka till huvudsidan efter att inlägget är skapat
    this.router.navigate(['/home']);
  }
}

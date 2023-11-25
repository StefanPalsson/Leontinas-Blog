import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { BlogPost, PostService } from '../post.service';

@Component({
  selector: 'app-home', 
  templateUrl: './home.component.html', 
  styleUrls: ['./home.component.css'] 
})
export class HomeComponent implements OnInit {
  // Skapar en array för att lagra blogginlägg
  posts: BlogPost[] = [];
  // Array för att lagra de inlägg som visas i karusellen
  visiblePosts: BlogPost[] = [];
  // Index för att hålla koll på vilket inlägg som är först i karusellen
  currentCarouselIndex = 0;
  // Antalet inlägg som ska visas i karusellen
  readonly displayCount = 9;

  // Injectar PostService för att hämta blogginlägg och ChangeDetectorRef för att uppdatera vyn
  constructor(private postService: PostService, private changeDetectorRef: ChangeDetectorRef) {}

  // Initierar komponenten genom att ladda inlägg och sätta upp karusellen
  ngOnInit(): void {
    this.loadPosts();
    this.setupVisiblePosts();
  }

  // Laddar alla blogginlägg från PostService
  loadPosts(): void {
    this.posts = this.postService.getPosts();
  }

  // Sätter upp de inlägg som ska vara synliga i karusellen baserat på det aktuella indexet
  setupVisiblePosts(): void {
    this.visiblePosts = [];

    for (let i = 0; i < this.displayCount; i++) {
      let index = (this.currentCarouselIndex + i) % this.posts.length;
      this.visiblePosts.push(this.posts[index]);
    }
  }

  // Metod för att navigera i karusellen
  navigateCarousel(direction: number): void {
    const postsLength = this.posts.length;

    // Beräknar det nya indexet för karusellen baserat på användarens interaktion
    this.currentCarouselIndex = (this.currentCarouselIndex + direction + postsLength) % postsLength;

    // Uppdaterar de synliga inläggen och tvingar en uppdatering av vyn
    this.setupVisiblePosts();
    this.changeDetectorRef.detectChanges(); 
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogPost, PostService } from '../post.service';
import { PerspectiveService } from '../perspective.service';

// Deklarerar komponenten med deras HTML och CSS filer.
@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {
  post?: BlogPost; // Håller det aktuella blogginlägget.
  newComment: string = ''; // Används för att binda textfält för nya kommentarer.

  // Injectar beroenden som behövs för komponenten.
  constructor(
    private route: ActivatedRoute, // Används för att fånga upp route-parametrar.
    private postService: PostService, // Service för att hantera blogginlägg.
    private router: Router, // Används för navigering.
    public perspectiveService: PerspectiveService // Håller koll på vilket perspektiv (användare eller ägare) som är aktivt.
  ) {}

  // Initiering av komponenten, hämtar blogginlägget baserat på ID från URL:en.
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const postId = parseInt(params.get('id')!, 10);
      if (!isNaN(postId)) {
        this.post = this.postService.getPostById(postId); // Hämtar inlägget från servicen.
      }
    });
  }

  // Lägger till en kommentar till det aktuella inlägget och uppdaterar det.
  addComment(): void {
    if (this.post && this.newComment.trim()) {
      this.post.comments.push(this.newComment.trim());
      this.newComment = ''; // Återställer kommentarfältet.
      this.postService.updatePost(this.post); // Uppdaterar inlägget i servicen.
    }
  }

  // Ökar antalet likes för inlägget och uppdaterar det.
  likePost(): void {
    if (this.post) {
      this.post.likes += 1;
      this.postService.updatePost(this.post);
    }
  }

  // Ökar antalet dislikes för inlägget och uppdaterar det.
  dislikePost(): void {
    if (this.post) {
      this.post.dislikes += 1;
      this.postService.updatePost(this.post);
    }
  }

  // Tar bort inlägget och navigerar tillbaka till huvudsidan.
  deletePost(postId: number): void {
    this.postService.deletePost(postId);
    this.router.navigate(['/home']); // Navigering efter borttagning.
  }
}

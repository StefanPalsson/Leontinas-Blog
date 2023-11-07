import { Component } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent {
  constructor(private postService: PostService) {}

  createPost(title: string, thumbnailUrl: string, content: string): void {
    // Här skulle du skapa ett objekt för inlägget och sedan spara det
    const newPost = {
      title,
      thumbnailUrl,
      body: content,
      creationDate: new Date(),
      likes: 0,
      dislikes: 0,
      comments: []
    };
    
    this.postService.addPost(newPost);
  }
}

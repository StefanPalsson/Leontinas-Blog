import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor() {}

  getPosts() {
    const posts = localStorage.getItem('posts');
    return posts ? JSON.parse(posts) : [];
  }

  addPost(post: any) {
    const posts = this.getPosts();
    post.id = posts.length + 1; // Enkel ID-assignment, bör ersättas med en bättre ID-strategi
    posts.push(post);
    localStorage.setItem('posts', JSON.stringify(posts));
  }

  // Ytterligare metoder ...
}

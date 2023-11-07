import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service'; // Se till att sökvägen stämmer överens med platsen för din service

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // Skapa en egenskap för att lagra inläggen
  posts: any[] = [];

  // Injecta PostService via konstruktorn
  constructor(private postService: PostService) {}

  // OnInit livscykelkrok för att hämta inläggen när komponenten initialiseras
  ngOnInit(): void {
    this.posts = this.postService.getPosts();
  }
}

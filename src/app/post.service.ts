import { Injectable } from '@angular/core';

export interface BlogPost {
  id?: number;
  title: string;
  thumbnailUrl: string;
  body: string;
  creationDate: Date;
  likes: number;
  dislikes: number;
  comments: string[];
}

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor() {
    if (!localStorage.getItem('posts')) {
      this.initializePosts();
    }
  }

  private initializePosts(): void {
    const initialPosts: BlogPost[] = [
      {
      id: 1,
      title: 'Stjärnglans i Farbrors Studio',
      thumbnailUrl: 'assets/img/Alice-Fotosession/Leontina-foto-thumbnail.jpg',
      body: 'I farbrors mysiga studio blev jag huvudpersonen framför linsen, klädd i en klänning och blommor som pappa valt ut med omsorg.',
      creationDate: new Date(),
      likes: 0,
      dislikes: 0,
      comments: []
    },
    {
      id: 2,
      title: 'En dag att minnas: Pappa-dotter-dejt',
      thumbnailUrl: 'assets/img/Alice-dejt/Alice-Dejt-1.jpg',
      body: 'Pappa tog med mig till en affär där jag fick köpa dena vackra klänningen. Sedan tog han mig på dejt till Orangeriet. Där jag fick fluffiga pannkakor och supergod milkshake.',
      creationDate: new Date(),
      likes: 0,
      dislikes: 0,
      comments: []
    },
    {
      id: 3,
      title: 'Pappamys',
      thumbnailUrl: 'assets/img/Alice och Pappa/Alice-Pappa.jpg',
      body: 'Pappamys',
      creationDate: new Date(),
      likes: 0,
      dislikes: 0,
      comments: []
    },
    {
      id: 4,
      title: 'Bubblor är kul',
      thumbnailUrl: 'assets/img/Alice-Fotosession/Alice-Bubblor.jpg',
      body: 'Bubblor är kul',
      creationDate: new Date(),
      likes: 0,
      dislikes: 0,
      comments: []
    },
    {
      id: 5,
      title: 'Stolt storasyster',
      thumbnailUrl: 'assets/img/Alice-Elliot/Alice-Elliot.jpg',
      body: 'Stolt storasyster',
      creationDate: new Date(),
      likes: 0,
      dislikes: 0,
      comments: []
    },
    {
      id: 6,
      title: 'Nyckelpigans viskning på Ven',
      thumbnailUrl: 'assets/img/Alice-Fotosession/Alice-Nyckelpiga.jpg',
      body: 'Nyckelpigans viskning på Ven',
      creationDate: new Date(),
      likes: 0,
      dislikes: 0,
      comments: []
    },
    {
      id: 7,
      title: 'Glädje i den gyllene timmen',
      thumbnailUrl: 'assets/img/Alice-Fotosession/Alice-Nalle.jpg',
      body: 'Glädje i den gyllene timmen',
      creationDate: new Date(),
      likes: 0,
      dislikes: 0,
      comments: []
    },
    {
      id: 8,
      title: 'Kapten på däck',
      thumbnailUrl: 'assets/img/Alice-Astrid.jpg',
      body: 'Kapten på däck',
      creationDate: new Date(),
      likes: 0,
      dislikes: 0,
      comments: []
    },
    {
      id: 9,
      title: 'Glädjefyllda Turer på Födelsedagen',
      thumbnailUrl: 'assets/img/Alice-Cykel.jpg',
      body: 'Glädjefyllda Turer på Födelsedagen',
      creationDate: new Date(),
      likes: 0,
      dislikes: 0,
      comments: []
    },
    {
      id: 10,
      title: 'Spindelns Överraskning på Halloween',
      thumbnailUrl: 'assets/img/Alice-Halloween.jpg',
      body: 'Spindelns Överraskning på Halloween',
      creationDate: new Date(),
      likes: 0,
      dislikes: 0,
      comments: []
    },
    {
      id: 11,
      title: 'Äventyraren på Väg: Ett Hotelläventyr Väntar',
      thumbnailUrl: 'assets/img/Alice-Hotell.jpg',
      body: 'Äventyraren på Väg: Ett Hotelläventyr Väntar',
      creationDate: new Date(),
      likes: 0,
      dislikes: 0,
      comments: []
    },
  ];

    localStorage.setItem('posts', JSON.stringify(initialPosts));
  }

  getPosts(): BlogPost[] {
    const posts = localStorage.getItem('posts');
    return posts ? JSON.parse(posts) : [];
  }

  addPost(post: BlogPost): void {
    const posts = this.getPosts();
    const nextId = posts.length > 0 ? Math.max(...posts.map(p => p.id || 0)) + 1 : 1;
    post.id = post.id || nextId;
    post.thumbnailUrl = post.thumbnailUrl || 'assets/img/Alice-Fotosession/Leontina-foto-thumbnail.jpg';
    posts.push(post);
    localStorage.setItem('posts', JSON.stringify(posts));
  }

  updatePost(updatedPost: BlogPost): void {
    const posts = this.getPosts();
    const postIndex = posts.findIndex(post => post.id === updatedPost.id);
    if (postIndex !== -1) {
      posts[postIndex] = updatedPost;
      localStorage.setItem('posts', JSON.stringify(posts));
    }
  }

  getPostById(id: number): BlogPost | undefined {
    const posts = this.getPosts();
    return posts.find(post => post.id === id);
  }

  deletePost(postId: number): void {
    const posts = this.getPosts().filter(post => post.id !== postId);
    localStorage.setItem('posts', JSON.stringify(posts));
  }
}

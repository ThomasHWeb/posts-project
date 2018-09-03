import { Injectable } from '@angular/core';
import {Post} from '../models/post.model';
import {Observable, of, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private posts: Post[];
  postsSubject = new Subject<Post[]>();

  constructor() {
    this.posts = [
      new Post(
        'Mon premier post',
        'Haec subinde Constantius audiens et quaedam referente Thalassio doctus, ' +
        'quem eum odisse iam conpererat lege communi, scribens ad Caesarem blandius ' +
        'adiumenta paulatim illi subtraxit, sollicitari se simulans ne',
        1,
        new Date('2018-08-21 14:00')
      ),
      new Post(
        'Mon deuxième post',
        'Haec subinde Constantius audiens et quaedam referente Thalassio doctus, ' +
        'quem eum odisse iam conpererat lege communi, scribens ad Caesarem blandius ' +
        'adiumenta paulatim illi subtraxit, sollicitari se simulans ne',
        -1,
        new Date('2018-08-22 08:00')
      ),
      new Post(
        'Un autre post',
        'Haec subinde Constantius audiens et quaedam referente Thalassio doctus, ' +
        'quem eum odisse iam conpererat lege communi, scribens ad Caesarem blandius ' +
        'adiumenta paulatim illi subtraxit, sollicitari se simulans ne',
        0,
        new Date('2018-08-23 21:00')
      )
    ];
  }

  emitPostSubject() {
    this.postsSubject.next(this.posts);
  }

  getPosts(): Observable<Post[]> {
    return of(this.posts);
  }

  addLike(post: Post) {
    post.like();
    this.emitPostSubject();
  }

  reduceLike(post: Post) {
    post.dislike();
    this.emitPostSubject();
  }

  addPost(newPost: Post) {
    // unshift permet d'ajouter un nouvel élément au début du tableau
    this.posts.unshift(newPost);
    this.emitPostSubject();
  }

  deletePost(post: Post) {
    const postIndexToDelete = this.posts.findIndex(
      (element) => {
        if (element === post) {
          return true;
        }
      }
    );

    this.posts.splice(postIndexToDelete, 1);
    this.emitPostSubject();
  }
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { CustomHttpClient } from 'src/app/shared/services/custom-http-client.service';

import { IComment } from '../interfaces/comment.interface';
import { IPost } from '../interfaces/post.interface';

@Injectable({
  providedIn: 'root',
})
export class ApiPostService {

  constructor(private httpClient: CustomHttpClient) {}

  /**
   * List posts
   */
  public getPostList(): Observable<IPost[]> {
    return this.httpClient.get('posts');
  }

  /**
   * Creat new post
   * @param details details of new post
   */
  public postNewPost(details: Partial<IPost>): Observable<any> {
    return this.httpClient.post('posts', details);
  }

  /**
   * List comments for post
   * @param postId id of post
   */
  public getCommentList(postId: number): Observable<IComment[]> {
    return this.httpClient.get(`posts/${postId}/comments`);
  }

  /**
   * Get user details
   * @param userId id of user
   */
  public getUser(userId: number): Observable<any> {
    return this.httpClient.get(`users/${userId}`);
  }
}

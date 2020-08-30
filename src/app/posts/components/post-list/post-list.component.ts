import { Component, OnInit } from '@angular/core';

import { IPost } from '../../interfaces/post.interface';
import { ApiPostService } from '../../services/api-post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent implements OnInit {

  public highlightedPost: IPost;
  public postList: IPost[] = [];
  public noMoreItems = false;

  private readonly pageSize = 5;
  private pageIndex = 0;
  private fullPostList: IPost[];

  constructor(private apiService: ApiPostService) { }

  public ngOnInit(): void {
    this.apiService.getPostList().subscribe((postList) => {
      this.fullPostList = postList;
      this.highlightedPost = this.fullPostList[0];
      this.paginateList();
    });
  }

  public loadMore() {
    this.pageIndex += 1;
    this.paginateList();
  }

  private paginateList() {
    const from = this.pageIndex * this.pageSize + 1;
    const to = (this.pageIndex + 1) * this.pageSize + 1;
    this.postList.push(
      ...this.fullPostList.slice(from, to)
    );
    this.noMoreItems = to >= this.fullPostList.length;
  }
}

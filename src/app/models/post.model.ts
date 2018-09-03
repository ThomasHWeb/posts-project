export class Post {
  title: string;
  content: string;
  likeCount: number;
  createDate: Date;

  constructor(title, content, likeCount, createDate) {
    this.title = title;
    this.content = content;
    this.likeCount = likeCount;
    this.createDate = createDate;
  }

  like() {
    this.likeCount++;
  }

  dislike() {
    this.likeCount--;
  }

  getLikeCount() {
    return this.likeCount;
  }
}

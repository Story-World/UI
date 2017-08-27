import {User} from '../user/user.class';

export class CommentContent {

  public id: String;
  public author: User;
  public content: String;
  public likes: number;
  public dislikes: number;
  public edited: boolean;
  public date: String;
  public storyId: number;

}

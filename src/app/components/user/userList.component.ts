import { Component, ViewEncapsulation } from '@angular/core';
import { User } from '../../classes/user/user.class';
import { UserService } from '../../services/common/userService.service';
import { ProxyResponse } from '../../classes/response.class';
import { UserDataProvider } from '../../services/userDataProvider.service';

@Component({
	selector: 'list',
	templateUrl: `../app/views/user/userList.html`,
	styleUrls: [`../app/styles/styles.css`],
	providers: [UserService],
	encapsulation: ViewEncapsulation.None
})
export class UserListComponent  { 
	users:Array<User>=[];
	token:String;
	block:boolean=true;
	private page: number = 0;
	constructor(private userDataProvider:UserDataProvider, private userService: UserService){
		this.token = userDataProvider.getToken();
		this.userService.getUsers(this.token, this.page, 10).then(res => this.handleUsers(res));
	}

	setBlock(block:boolean, user:User){
		this.userService.setBlock(this.token, user, block).then(res => this.handleBlock(res,user));
	}

	private handleUsers(res:ProxyResponse){
		if(res) {
			if(this.users.length == 0) {
				res.getUsers().forEach(x=>this.users.push(x));
				if(this.users.length % 10 == 0){					
					this.page++;
				}				
			} else if(res.getUsers().length > (this.users.length % 10)) {
				for(var i=this.users.length % 10; i<res.getUsers().length; i++){
					this.users.push(res.getUsers()[i]);
				}
			}
		}
	}

	private handleBlock(res:ProxyResponse,user:User){
		if(res){
			user.block=!user.getBlock();
		}
	}
}
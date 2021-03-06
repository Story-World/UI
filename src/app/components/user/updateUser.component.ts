import { Component, ViewEncapsulation } from '@angular/core';
import { User } from '../../classes/user/user.class';
import { UpdateUserService } from '../../services/user/updateUser.service';
import { UserService } from '../../services/common/userService.service';
import { ProxyResponse } from '../../classes/response.class';
import { UserDataProvider } from '../../services/userDataProvider.service';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'updateUser',
	templateUrl: `../app/views/user/updateUser.html`,
	styleUrls: [`../app/styles/styles.css`],
	providers: [UpdateUserService, UserService],
	encapsulation: ViewEncapsulation.None
})

export class UpdateUserComponent {
	updateUser: User;
	token: String;
	cpass: String;
	constructor(private userDataProvider: UserDataProvider, private router: ActivatedRoute, private updateUserService: UpdateUserService, private userService: UserService) {
		this.token = userDataProvider.getToken();
		if(this.router.snapshot.params['id'] != null){
			this.updateUser = new User;
			this.updateUser.id = this.router.snapshot.params['id'];
		}
		userService.getUser(this.updateUser, this.token).then(res => this.handleGetUserResponse(res));
		this.updateUser = new User;
	}

	update(){
		this.updateUserService.updateUser(this.updateUser, this.token).then(res => this.handleConfirmUpdate(res));
	}

	changePassword(){
		this.updateUserService.changePassword(this.updateUser, this.token).then(res => this.handleConfirmUpdate(res));
	}

	private handleGetUserResponse(res:ProxyResponse){
		if(res){
			this.updateUser = res.getUser();
		}
	}

	private handleConfirmUpdate(res:ProxyResponse){
		if(res){
			this.updateUser = res.getUser();
			this.cpass = null;
		}
	}
}
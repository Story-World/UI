import { Component, ViewEncapsulation } from '@angular/core';
import { User } from '../../classes/user/user.class';
import { TokenService } from '../../services/user/token.service';
import { ProxyResponse } from '../../classes/response.class';
import { TokenType } from '../../classes/user/token.enum';
import { UserDataProvider } from '../../services/userDataProvider.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
	selector: 'token',
	templateUrl: `../app/views/user/token.html`,
	styleUrls: [`../app/styles/styles.css`],
	providers: [TokenService],
	encapsulation: ViewEncapsulation.None
})

export class TokenComponent {
	tokenType: TokenType;
	user: User;
	token: String;
	cpass: String;
	constructor(private userDataProvider: UserDataProvider, private activatedRouter: ActivatedRoute, private router: Router, private tokenService:TokenService) {
		this.tokenType = this.activatedRouter.snapshot.params['type'];
		this.token = this.activatedRouter.snapshot.params['token'];

		this.user = new User;
		this.user.id = this.activatedRouter.snapshot.params['userId'];
		switch(this.tokenType)
		{
			case TokenType.RESTART_PASSWORD:
				break;
			case TokenType.REGISTER:
				this.tokenService.confirmRegister(this.user, this.tokenType, this.token).then(res => this.handleConfirmRegister(res));
				break;
			// default:
			// 	this.router.navigate(['login']);
		}
	}

	remindPassword(){
		if(this.userDataProvider.isLoggedIn()){
			this.router.navigateByUrl("");
		}
		this.tokenService.remindPassword(this.user, this.tokenType, this.token).then(res => this.handleRemindPassword(res));
	}

	private handleRemindPassword(res:ProxyResponse){
		if(res){
			this.router.navigate(['login']);
		}
	}

	private handleConfirmRegister(res:ProxyResponse){
		this.router.navigate(['login']);
	}

	showRemindPassword(){
		return this.tokenType === TokenType.RESTART_PASSWORD;
	}
}
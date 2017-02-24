import { Component, OnInit } from '@angular/core';
import { User } from '../../classes/user.class';
import { UserDataProvider } from '../../services/userDataProvider.service';
import { Router } from '@angular/router';
import { LoginRegisterService } from '../../services/user/loginRegister.service';

@Component({
	selector: 'loginRegister',
	templateUrl: `../app/views/loginRegister.html`,
	styleUrls: [`../app/styles/styles.css`],
	providers: [LoginRegisterService]
})
export class LoginRegisterComponent{
	loginUser: User;
	constructor(private userDataProvider: UserDataProvider, private router: Router, private loginRegisterService:LoginRegisterService) {
		if(this.userDataProvider.isLoggedIn()){
			this.router.navigateByUrl("");
		}

		this.loginUser = new User;
	}

	login(){
		this.loginRegisterService.login(this.loginUser);
	}

}
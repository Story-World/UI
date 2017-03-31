import { Component, OnInit } from '@angular/core';
import { User } from '../../classes/user/user.class';
import { UserDataProvider } from '../../services/userDataProvider.service';
import { Router } from '@angular/router';
import { LoginRegisterService } from '../../services/user/loginRegister.service';
import { ProxyResponse } from '../../classes/response.class';

@Component({
	selector: 'loginRegister',
	templateUrl: `../app/views/loginRegister.html`,
	styleUrls: [`../app/styles/styles.css`],
	providers: [LoginRegisterService]
})
export class LoginRegisterComponent {
	loginUser: User;
	registerUser: User;
	restartPasswordUser: User;
	terms:boolean;
	constructor(private userDataProvider: UserDataProvider, private router: Router, private loginRegisterService:LoginRegisterService) {
		if(this.userDataProvider.isLoggedIn()){
			this.router.navigateByUrl("");
		}

		this.loginUser = new User;
		this.registerUser = new User;
		this.restartPasswordUser = new User;
		this.terms = false; false; false;
	}

	login(){
		this.loginRegisterService.login(this.loginUser).then(res => this.handleLogin(res));
	}

	register(){
		this.loginRegisterService.register(this.registerUser).then(res => this.handleRegister(res));
	}

	restartPassword(){
		this.loginRegisterService.restartPassword(this.restartPasswordUser).then(res => this.handleRestart(res));
	}

	private handleLogin(res:ProxyResponse){
		if(res){
			this.userDataProvider.logIn(res);
		}
	}

	private handleRegister(res:ProxyResponse){
		if(res){
			this.registerUser = new User();
		}
	}

	private handleRestart(res:ProxyResponse){
		if(res){
			this.restartPasswordUser = new User();
		}
	}
}
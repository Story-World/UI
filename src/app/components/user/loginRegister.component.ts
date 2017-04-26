import { Component, ViewEncapsulation } from '@angular/core';
import { User } from '../../classes/user/user.class';
import { UserDataProvider } from '../../services/userDataProvider.service';
import { Router } from '@angular/router';
import { LoginRegisterService } from '../../services/user/loginRegister.service';
import { ProxyResponse } from '../../classes/response.class';

@Component({
	selector: 'loginRegister',
	templateUrl: `../app/views/loginRegister.html`,
	styleUrls: [`../app/styles/styles.css`],
	providers: [LoginRegisterService],
	encapsulation: ViewEncapsulation.None
})
export class LoginRegisterComponent {
	loginUser: User;
	registerUser: User;
	restartPasswordUser: User;
	terms:Boolean;
	tips:Boolean;
	cpass:String;
	constructor(private userDataProvider: UserDataProvider, private router: Router, private loginRegisterService:LoginRegisterService) {
		if(this.userDataProvider.isLoggedIn()){
			this.router.navigateByUrl("");
		}

		this.loginUser = new User;
		this.registerUser = new User;
		this.restartPasswordUser = new User;
		this.terms = false;
		this.tips = false;
		this.cpass = null;
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

	showTips(){
		this.tips=!this.tips;
	}

	isTips(){
		return this.tips;
	}

	acceptTerms(){
		this.terms=!this.terms;
	}

	isTerms(){
		return this.terms;
	}

	private handleLogin(res:ProxyResponse){
		if(res){
			this.userDataProvider.logIn(res);
			this.router.navigate(['/']);
		}
	}

	private handleRegister(res:ProxyResponse){
		if(res){
			this.registerUser = new User();
			this.cpass = null;
			this.terms = false;
		}
	}

	private handleRestart(res:ProxyResponse){
		if(res){
			this.restartPasswordUser = new User();
		}
	}
}
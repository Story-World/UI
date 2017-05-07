import { Component, ViewEncapsulation } from '@angular/core';
import { User } from '../../classes/user/user.class';
import { UserService } from '../../services/common/userService.service';
import { ProxyResponse } from '../../classes/response.class';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'profile',
	templateUrl: `../app/views/user/profile.html`,
	styleUrls: [`../app/styles/styles.css`],
	providers: [UserService],
	encapsulation: ViewEncapsulation.None
})

export class ProfileComponent {

	constructor(private router: ActivatedRoute, private userService: UserService, private activatedRouter: ActivatedRoute) {
		console.log(this.activatedRouter.snapshot.params['id']);
	}

}
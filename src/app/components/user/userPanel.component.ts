import { Component } from '@angular/core';

@Component({
  selector: 'userPanel',
  templateUrl: `../app/views/user/userPanel.html`,
  styleUrls: [`../app/styles/styles.css`]
})
export class UserPanelComponent  { 
	public showPanel = false;
 }
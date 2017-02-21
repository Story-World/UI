import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { StoryWorldComponent }  from './app.component';
import { UserPanelComponent } from './user/userPanel.component';
import { MenuComponent } from './menu.component';
import { LeftMenuComponent } from './left.component';
import { MainSiteComponent } from './mainsite.component';

@NgModule({
imports:      [ BrowserModule ],
declarations: [ StoryWorldComponent, UserPanelComponent, MenuComponent, LeftMenuComponent, MainSiteComponent ],
bootstrap:    [ StoryWorldComponent ]
})
export class StoryWorldModule { }

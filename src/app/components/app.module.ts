import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { StoryWorldComponent }  from './app.component';
import { UserPanelComponent } from './user/userPanel.component';
import { MenuComponent } from './menu.component';

@NgModule({
imports:      [ BrowserModule ],
declarations: [ StoryWorldComponent, UserPanelComponent, MenuComponent ],
bootstrap:    [ StoryWorldComponent ]
})
export class StoryWorldModule { }

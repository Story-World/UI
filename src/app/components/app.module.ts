import {NgModule} from '@angular/core';
import {BrowserModule}  from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';

import {TranslationModule} from './translate.module';

import {AdminModule} from './admin/admin.module';
import {StoryModule} from './story/story.module';
import {UserModule} from './user/user.module';
import {UsualModule} from './usual/usual.module';

import {AppComponent} from './app.component';

const appRoutes: Routes = [
];

@NgModule({
	imports: [
		BrowserModule, RouterModule.forRoot(appRoutes), TranslationModule,
		StoryModule, UserModule, AdminModule, UsualModule
	],
	declarations: [
		AppComponent
	],
	bootstrap: [AppComponent]
})
export class AppModule {}

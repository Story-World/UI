import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { storyWorldComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ storyWorldComponent ],
  bootstrap:    [ storyWorldComponent ]
})
export class storyWorldModule { }

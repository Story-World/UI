import { Component } from '@angular/core';

@Component({
  selector: 'storyWorld',
  template: `<h1>Hello {{name}}</h1>`,
})
export class storyWorldComponent  { name = 'Angular'; }

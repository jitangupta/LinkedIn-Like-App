import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  template: `
    <app-header></app-header>
    <router-outlet></router-outlet>
  `,
})
export class BaseComponent {}

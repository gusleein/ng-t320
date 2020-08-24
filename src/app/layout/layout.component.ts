import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  template: `
    <div class="header">
        Заголовок
    </div>
    <div class="content-area">
      <ng-content></ng-content>
    </div>
  `,
  styles: [
  ]
})
export class LayoutComponent {
}
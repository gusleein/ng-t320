import {Component} from '@angular/core';

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
      `
          .header {
              padding: 16px;
              font-family: Roboto, serif;
              font-style: normal;
              font-weight: normal;
              font-size: 14px;
              line-height: 16px;
              display: flex;
              align-items: center;
              text-indent: 16px;

              color: #666666;

              position: sticky;
              top: 0;
              width: 100%;
              background: rgb(239, 240, 241);
          }

          .content-area {
              width: 600px;
              height: calc(100vh - 58px);
              margin: auto;
              background: rgba(0, 0, 0, 0.05);
          }
    `
  ]
})
export class LayoutComponent {
}
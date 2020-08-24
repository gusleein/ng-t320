import { Component, OnInit } from '@angular/core';
import ICategory from "../../shared/types/category.interface";
import {CategoriesService} from "../../shared/services/categories.service";

@Component({
  selector: 'categories-list',
  template: `
    <ng-container *ngFor="let cat of models">
        <div class="category">
            <a [routerLink]="[cat.id]">{{cat.name}}</a>
        </div>
    </ng-container>
  `,
  styles: [
    `
      .category {
          padding: 10px;
          font-family: Roboto,serif;
          font-style: normal;
          font-weight: normal;
          font-size: 14px;
          line-height: 16px;
          display: flex;
          align-items: center;
          text-indent: 16px;

          color: #666666;
      }
    `
  ]
})
export class ListComponent implements OnInit {

  models: ICategory[] = [];

  constructor(private service: CategoriesService) { }

  ngOnInit(): void {
    this.service.query().then((list) => this.models = list)
  }

}

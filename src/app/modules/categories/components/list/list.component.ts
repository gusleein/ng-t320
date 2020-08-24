import {Component, OnInit} from '@angular/core';
import ICategory from "../../shared/types/category.interface";
import {CategoriesService} from "../../shared/services/categories.service";

@Component({
  selector: 'categories-list',
  template: `
      <div class="category category_add" (click)="new()">
          +
      </div>
      <ng-container *ngIf="isNew">
          <div class="category">
              <input type="text" [(ngModel)]="newCategoryName">
              <button (click)="addCategory()">add</button>
              <button (click)="cancel()">cancel</button>
          </div>
      </ng-container>
      <ng-container *ngFor="let cat of models">
          <div class="category" [routerLink]="[cat.id]">
              {{cat.name}}
          </div>
      </ng-container>
  `,
  styleUrls: ['./list.component.less']
})
export class ListComponent implements OnInit {

  models: ICategory[] = [];
  isNew: boolean = false;
  newCategoryName: string = '';

  constructor(private service: CategoriesService) {
  }

  ngOnInit(): void {
    this.service.query().then((list) => this.models = list)
  }

  new() {
    this.isNew = true;
  }
  addCategory() {

  }
  cancel() {
    this.isNew = false;
    this.newCategoryName = '';
  }
}

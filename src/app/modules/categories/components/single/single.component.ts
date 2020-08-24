import {Component, OnInit} from '@angular/core';
import {CategoriesService} from "../../shared/services/categories.service";
import ICategory from "../../shared/types/category.interface";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'categories-single',
  template: `
      <div class="wrapper">
      <div class="back">
          <a [routerLink]="['../']">< {{category?.name}}</a>
      </div>
      </div>
      <div class="element-list">
          <ng-container *ngFor="let el of category?.items">
              <div class="wrapper">
                <div class="element-list__item">
                    <div class="element-list__item-text">
                        {{el.text}}
                    </div>
                    <div class="element-list__item-delete" (click)="deleteItem(el.id)">
                        <img src="/assets/icons/close.png" alt="">
                    </div>
                </div>
              </div>
          </ng-container>
          <div class="wrapper">
              <div class="element-list__item element-list__item_new">
                  +
              </div>
          </div>
      </div>
  `,
  styleUrls: ['./single.component.less']
})
export class SingleComponent implements OnInit {
  category: ICategory;

  constructor(private service: CategoriesService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((p) => {
      this.service.get(p.id).then((cat) => {
        this.category = cat
      })
    })
  }

  deleteItem(id: number) {
    this.service.delete(id).then(() => {
      let items = this.category.items;
      items.splice(items.indexOf(items.find((item)=> item.id == id)), 1)
    })
  }
}

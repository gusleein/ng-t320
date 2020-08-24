import { Injectable } from '@angular/core';
import DataService from "@app/core/types/data-service.interface";
import ICategory from "../types/category.interface";
import {from, of} from "rxjs";
import categories from "./categories.data"
import {find, map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CategoriesService implements DataService<ICategory> {

  categories: ICategory[] = categories;

  constructor() {
  }

  public get(id: number): Promise<ICategory> {
    const source = from(this.categories).pipe(
      find((cat: ICategory)=> cat.id == id),
      map((cat: ICategory) => {
        cat.items = cat.items.sort((a, b) => {
          if (a.text < b.text) return -1;
          if (a.text > b.text) return 1;
          return 0
        })
        return cat
      })
    )
    return source.toPromise()
  }

  public query(): Promise<ICategory[]> {
    const source = of(this.categories)
    return source.toPromise()
  }

  public delete(id: number): Promise<void> {
    return new Promise(() => {})
  }
}
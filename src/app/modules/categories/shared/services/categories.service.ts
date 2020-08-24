import { Injectable } from '@angular/core';
import DataService from "@app/core/types/data-service.interface";
import ICategory from "../types/category.interface";
import {Observable, of, ReplaySubject} from "rxjs";
import data from "./categories.data"

@Injectable({
  providedIn: 'root'
})
export class CategoriesService implements DataService<ICategory> {
  categories: Observable<ICategory[]> = new ReplaySubject()

  constructor() {
    // mocks
    this.categories = of<any>(data)
    this.categories.subscribe((list) => {
      console.log(list)
    })
  }

  public get(id: number): Promise<ICategory> {
    return new Promise(() => {})
  }
  public query(): Promise<ICategory[]> {
    return this.categories.toPromise()
  }
  public delete(id: number): Promise<void> {
    return new Promise(() => {})
  }
}
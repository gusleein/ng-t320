import { Injectable } from '@angular/core';
import DataService from "../../../../core/types/data-service.interface";
import ICategory from "../types/category.interface";

@Injectable({
  providedIn: 'root'
})
export class CategoriesService implements DataService<ICategory> {
  public get(id: number): Promise<ICategory> {
    return new Promise(() => {})
  }
  public query(): Promise<ICategory[]> {
    return new Promise(() => {})
  }
  public delete(id: number): Promise<void> {
    return new Promise(() => {})
  }
}
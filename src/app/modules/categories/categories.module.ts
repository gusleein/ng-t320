import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { ListComponent } from './components/list/list.component';
import { SingleComponent } from './components/single/single.component';
import {CategoriesService} from "./shared/services/categories.service";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [ListComponent, SingleComponent],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    FormsModule
  ],
  providers: [
    CategoriesService
  ]
})
export class CategoriesModule { }

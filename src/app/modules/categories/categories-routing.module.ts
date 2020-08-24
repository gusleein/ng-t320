import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListComponent} from "./components/list/list.component";
import {SingleComponent} from "./components/single/single.component";

const routes: Routes = [
  {
    path: '', component: ListComponent
  },
  {
    path: ':id', component: SingleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule {
}

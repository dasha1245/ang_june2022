import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

import {MainLayoautComponent} from "./layouts/main-layoaut/main-layoaut.component";
import {LoginComponent} from "./components/login/login.component";
import {CarsComponent} from "./components/cars/cars.component";

const routes:Routes = [
  {
    path: '', component: MainLayoautComponent, children: [
      {path: '', redirectTo: 'login', pathMatch: "full"},
      {path: 'login', component: LoginComponent},
      {path: 'cars', component: CarsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

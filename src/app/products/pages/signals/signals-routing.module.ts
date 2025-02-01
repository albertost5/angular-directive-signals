import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SignalsLayoutComponent} from "./layout/signals-layout/signals-layout.component";
import {CounterComponent} from "./pages/counter/counter.component";
import {UserInfoPageComponent} from "./pages/user-info-page/user-info-page.component";
import {PropertiesPageComponent} from "./pages/properties-page/properties-page.component";

const routes: Routes = [
  {
    path: '',
    component: SignalsLayoutComponent,
    children: [
      {
        path: 'counter',
        component: CounterComponent
      },
      {
        path: 'user-info',
        component: UserInfoPageComponent
      },
      {
        path: 'properties',
        component: PropertiesPageComponent
      },
      {
        path: '**',
        redirectTo: 'counter'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignalsRoutingModule { }

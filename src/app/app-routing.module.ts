import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {MainLayoutComponent} from "./layouts/main-layout/main-layout.component";



const routes:Routes = [
  {path: '', component:MainLayoutComponent, children: [
      {path: 'cats', loadChildren: () => import('./modules/cats/cats.module').then(value => value.CatsModule)}
    ]}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

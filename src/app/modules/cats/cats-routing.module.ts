import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {CatsComponent} from "./components/cats/cats.component";
import {SelectorComponent} from "./components/selector/selector.component";


const roots:Routes =[
  {path: '', component:CatsComponent, children:[
      {path:'categories', component:SelectorComponent, outlet:'selector'}
    ]}
];

@NgModule({
  imports: [
    // CommonModule,
    RouterModule.forChild(roots)
  ],
  exports: [RouterModule]
})
export class CatsRoutingModule { }

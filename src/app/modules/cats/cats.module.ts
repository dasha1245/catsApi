import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatsComponent } from './components/cats/cats.component';
import { CatComponent } from './components/cat/cat.component';
import {CatsRoutingModule} from "./cats-routing.module";
import {MatCardModule} from "@angular/material/card";
import { SelectorComponent } from './components/selector/selector.component';
import { OneSelectorComponent } from './components/one-selector/one-selector.component';
import {MatCheckboxModule} from "@angular/material/checkbox";



@NgModule({
  declarations: [
    CatsComponent,
    CatComponent,
    SelectorComponent,
    OneSelectorComponent
  ],
  imports: [
    CommonModule,
    CatsRoutingModule,
    MatCardModule,
    MatCheckboxModule
  ]
})
export class CatsModule { }

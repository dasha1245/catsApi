import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {ICategories} from "../../interfaces/categories.interface";
import {BehaviorSubject} from "rxjs";
import * as events from "events";

@Component({
  selector: 'app-one-selector',
  templateUrl: './one-selector.component.html',
  styleUrls: ['./one-selector.component.css']
})
export class OneSelectorComponent implements OnInit {

  @Input()
  category:ICategories
  selectedCategory:number[] = []
  constructor() { }

  ngOnInit(): void {

  }

  onCheck(event:any) {
    if (event.checked){
      this.selectedCategory.push(this.category.id)
      console.log(this.selectedCategory)
    }
    console.log(this.selectedCategory);
  }


}

import { Component, OnInit } from '@angular/core';
import {CatsService} from "../../services/cats.service";
import {ICategories} from "../../interfaces/categories.interface";

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.css']
})
export class SelectorComponent implements OnInit {

  categories:ICategories[]

  constructor(private catsService:CatsService) { }

  ngOnInit(): void {
    this.catsService.getAllCategories().subscribe(value => this.categories = value)
  }

}

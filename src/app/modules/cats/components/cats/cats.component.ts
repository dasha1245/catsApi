import { Component, OnInit } from '@angular/core';
import {ICat} from "../../interfaces/cat.interface";
import {CatsService} from "../../services/cats.service";

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css']
})
export class CatsComponent implements OnInit {

  cats:ICat[];

  constructor(
    private catsService:CatsService) {

  }

  ngOnInit(): void {
    this.catsService.getAllCats().subscribe(value => this.cats = value)
  }

}

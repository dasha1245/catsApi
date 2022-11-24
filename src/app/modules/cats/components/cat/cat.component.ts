import {Component, Input, OnInit} from '@angular/core';
import {ICat} from "../../interfaces/cat.interface";

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})
export class CatComponent implements OnInit {

  @Input()
  cat: ICat

  constructor() {
  }

  ngOnInit(): void {
  }

}

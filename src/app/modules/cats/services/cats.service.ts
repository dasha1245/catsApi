import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {ICat} from "../interfaces/cat.interface";
import {urls} from "../../../configs";
import {ICategories} from "../interfaces/categories.interface";

@Injectable({
  providedIn: 'root'
})
export class CatsService {

  constructor(private httpClient:HttpClient) { }

  getAllCats(limit = 10) :Observable<ICat[]>{
    return this.httpClient.get<ICat[]>(urls.cats, {params:{limit}})
  }
  getAllCategories():Observable<ICategories[]>{
    return this.httpClient.get<ICategories[]>(urls.categories)
  }
}

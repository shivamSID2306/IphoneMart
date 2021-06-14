import { productsUrl } from 'src/app/config/api';
import { Product } from './../models/product';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(productsUrl); //returns an Obsevable; //We have to specify the type
  }
}

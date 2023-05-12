import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ProductResponseModel } from 'src/app/models/productResponseModel';

//enjekte edileblecek servise. bu servisimiz datayı alıp ihtiyaç yerlerine gönderilecek
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl: string = 'https://localhost:44305/api/products/getall';
  constructor(private httpClient: HttpClient) { }

  getProducts():Observable<ProductResponseModel> {
    return this.httpClient.get<ProductResponseModel>(this.apiUrl);
   }
}

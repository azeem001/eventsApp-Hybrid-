import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable()
export class DataService {

  constructor(private http :HttpClient ) { }

  categoryUrl="http://app2.digitalorders.in:8080/3E/apirequest/category/load";

  productUrl="http://app2.digitalorders.in:8080/3E/apirequest/product/load";

  singleProductUrl="http://app2.digitalorders.in:8080/3E/apirequest/product/loadsingle";
  
  loadCategory(data):Observable<any>
  {
    return this.http.get<[]>(this.categoryUrl+"/?loadMainAndSub="+data.loadMainAndSub);
  }

  loadProduct(categoryId):Observable<any>
  {
    
    return this.http.get(this.productUrl+"/?categoryId="+categoryId+"&start=0&limit=10");

  }

  loadSingleProduct(categoryId,productId):Observable<any>
  
  {
    return this.http.get(this.singleProductUrl+"/?categoryId="+categoryId+"&productId="+productId);
  }
  
}

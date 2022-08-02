import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { Category } from "../common/Category";
import { Product } from "../common/Product";

@Injectable({
    providedIn: 'root'
})

export class ManageServiceService{
    productUrl = "http://localhost:8080/api/products"
    categoryUrl = "http://localhost:8080/api/productCategories"

    constructor(private httpClient: HttpClient){}

    getAllproducts(): Observable<Product[]>{
        return this.httpClient.get<getProductResponse>(this.productUrl).pipe(map(response => response._embedded.products))
    }

    getAllCategories(): Observable<Category[]>{
        return this.httpClient.get<getCategoryResponse>(this.categoryUrl).pipe(map(response => response._embedded.categories))
    }
}

interface getProductResponse{
    _embedded : {
        products : Product[]
    }
}

interface getCategoryResponse{
    _embedded: {
        categories : Category[]
    }
}
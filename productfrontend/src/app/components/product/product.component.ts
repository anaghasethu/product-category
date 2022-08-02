import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/common/Product';
import { ManageServiceService } from 'src/app/services/ManageService.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Product[] = []
  constructor(private service:ManageServiceService) { }

  ngOnInit(): void {
    this.listofProducts()
  }

  listofProducts(){
    this.service.getAllproducts().subscribe(data=> {
      console.log(data)
      this.products = data
    })
  }
}

import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Category } from 'src/app/common/Category';
import { ManageServiceService } from 'src/app/services/ManageService.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories: Category[] = []
    
  constructor(private service: ManageServiceService) { }

  ngOnInit(): void {
    this.listofCategory()
  }

  listofCategory(){
    this.service.getAllCategories().subscribe(data => {
      console.log(data)
      this.categories = data
    })
  }

}

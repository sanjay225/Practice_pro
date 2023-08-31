import { Component, OnInit } from '@angular/core';
import { AddCategoryRequest } from '../models/add-category-request.model';
import { CategoryService } from '../services/category.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit{

  categoryList: AddCategoryRequest[]=[];

  constructor(private _catService: CategoryService){}

  ngOnInit(): void {
    this._catService.getCatagoryList().subscribe({
      next: (categoryList)=>{
        this.categoryList= categoryList
        console.log(categoryList)
      },
      error: (res)=>{
        console.log(res)
      }
    })
  }

}

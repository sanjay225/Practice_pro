import { Component } from '@angular/core';
import { AddCategoryRequest } from '../models/add-category-request.model';
import { CategoryService } from '../services/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent {

  model: AddCategoryRequest;

  constructor(private _catService: CategoryService, private router: Router){
    this.model={
      id: '',
      name:'',
      urlHandle: ''
    }
  }

  onFormSubmit(){
    console.log(this.model);
    this._catService.addCategoryList(this.model).subscribe({
      next: (addCategoryList)=>{
        this.router.navigate(['admin/categories'])
      }
    })
  }


}

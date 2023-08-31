import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../services/category.service';
import { AddCategoryRequest } from '../models/add-category-request.model';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent {

  editCategory: AddCategoryRequest;

  constructor(private route: ActivatedRoute, private _catService: CategoryService, private router: Router){
    this.editCategory={
      id:'',
      name:'',
      urlHandle: ''
    }
  }

  ngOnInit(){
    this.route.paramMap.subscribe({
      next: (parmas)=>{
        const id= parmas.get('id');

        if(id){
          this._catService.getCategoryListForEdit(id).subscribe({
            next: (res)=>{
              this.editCategory= res;
            }
          })
        } 
      }
    })
  }

  updateCategoyList(){
    this._catService.updateCategoyList(this.editCategory.id, this.editCategory).subscribe({
      next:(response)=>{
        this.router.navigate(['admin/categories'])
      }
    })
  }

  deleteCategoryList(id: string){
    this._catService.deleteCategoryList(id).subscribe({
      next:(response)=>{
        this.router.navigate(['/admin/categories'])
      }
    })
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddCategoryRequest } from '../models/add-category-request.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getCatagoryList(): Observable<AddCategoryRequest[]>{
    return this.http.get<AddCategoryRequest[]>('https://localhost:7168/api/Categories')
  }

  addCategoryList(model: AddCategoryRequest): Observable<AddCategoryRequest>{
    model.id="00000000-0000-0000-0000-000000000000"
   return this.http.post<AddCategoryRequest>('https://localhost:7168/api/Categories', model)
  }

  getCategoryListForEdit(id: string): Observable<AddCategoryRequest>{

   return this.http.get<AddCategoryRequest>(`https://localhost:7168/api/Categories/${id}`)
  }

  updateCategoyList(id:string, editCategory: AddCategoryRequest): Observable<AddCategoryRequest> {
    return this.http.put<AddCategoryRequest>(`https://localhost:7168/api/Categories/${id}`, editCategory)
  }

  deleteCategoryList(id: string): Observable<AddCategoryRequest>{
    return this.http.delete<AddCategoryRequest>(`https://localhost:7168/api/Categories/${id}`)
  }
}



// addEmployee(data: any): Observable<any>{
//   return this._http.post('http://localhost:3000/employee', data);
// }

// updateEmployee(id: number, data: any): Observable<any>{
//   return this._http.put(`http://localhost:3000/employee/${id}`, data);
// }

// getEmplyoeeList(): Observable<any>{
//   return this._http.get('http://localhost:3000/employee')
// }

// deleteEmplyoee(id: number): Observable<any>{
//   return this._http.delete(`http://localhost:3000/employee/${id}`)
// }
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddCategoryRequest } from '../models/add-category-request.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  // get(): Observable<AddCategoryRequest[]>{
  //   return this.http.get<AddCategoryRequest>()
  // }
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
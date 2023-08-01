import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../model/category.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  public getAllCategories(partialName?: string): Observable<Category[]> {
    let urlEndPoint: string = 'http://localhost:8080/store/categories';
    if (partialName) {
      urlEndPoint = urlEndPoint + "?partialName=" + partialName;
    }
    return this.http.get<Category[]>(urlEndPoint);
  }

  public deleteCategory(categoryIdToDelete: number): Observable<any> {
    let urlEndPoint: string = 'http://localhost:8080/store/categories/' + categoryIdToDelete;
    return this.http.delete<any>(urlEndPoint);
  }

  public insert(item: Category): Observable<Category> {
    let urlEndPoint: string = 'http://localhost:8080/store/categories/';
    return this.http.post<Category>(urlEndPoint, item);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Item } from '../model/item.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  
  constructor(private http: HttpClient) { }

  public getAllItems(page: number, size: number, sort: string, filters?: string): Observable<Item[]> {
    let urlEndPoint: string = "http://localhost:8080/store/items?page=" + page + "&size=" + size + "&sort=" + sort;
    if (filters) {
      urlEndPoint = urlEndPoint + "&filter=" + filters;
    }
    return this.http.get<Item[]>(urlEndPoint);
  }

  public deleteItem(itemIdToDelete: number): Observable<any> {
    let urlEndPoint: string = 'http://localhost:8080/store/items/' + itemIdToDelete;
    return this.http.delete<any>(urlEndPoint);
  }

  public getItemById(itemId: number): Observable<Item> {
    let urlEndPoint: string = 'http://localhost:8080/store/items/' + itemId;
    return this.http.get<Item>(urlEndPoint);
  }

  public insert(item: Item): Observable<Item> {
    let urlEndPoint: string = 'http://localhost:8080/store/items/';
    return this.http.post<Item>(urlEndPoint, item);
  }

  public update(item: Item): Observable<Item> {
    let urlEndPoint: string = 'http://localhost:8080/store/items/';
    return this.http.patch<Item>(urlEndPoint, item);
  }
}

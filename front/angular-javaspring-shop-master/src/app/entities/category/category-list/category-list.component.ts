import { Component, OnInit } from '@angular/core';
import { Category } from '../model/category.model';
import { CategoryService } from '../service/category.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {

  categoryId?: number;
  categories: Category[] = [];
  title: string = "";

  page: number = 0;
  size: number = 3;
  sort: string = "name,asc";

  first: boolean = false;
  last: boolean = false;
  totalPages: number = 0;
  totalElements: number = 0;

  nameFilter?: string;

  categoryToDelete?: number;

  constructor(private categoryService: CategoryService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    if (this.route.snapshot.paramMap.get("categoryId")) {
      this.categoryId = +this.route.snapshot.paramMap.get("categoryId")!;
      this.title = "Articulos de la categoría " + this.categoryId;
    } else {
      this.title = "Lista de artículos";
    }
    this.getCategories();
  }

  private getCategories(): void {
    this.categoryService.getAllCategories().subscribe({
      next: (categoriesRequest) => { this.categories = categoriesRequest; },
      error: (err) => { this.handleError(err); }
    })
  }
  handleError(err: any) {
    console.log(err);
  }

  public prepareCategoryToDelete(categoryId: number): void {
    this.categoryToDelete = categoryId;
  }

  public deleteCategory(): void {
    this.categoryService.deleteCategory(this.categoryToDelete!).subscribe({
      next: (data) => {
        console.log("categoria eliminada");
      },
      error: (err) => {
        console.log("error al eliminar") }
    })
  }
}

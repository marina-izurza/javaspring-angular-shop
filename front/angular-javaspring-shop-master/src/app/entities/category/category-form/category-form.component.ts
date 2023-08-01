import { Component, OnInit } from '@angular/core';
import { Category } from '../model/category.model';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from '../../item/service/item.service';
import { CategoryService } from '../service/category.service';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss']
})
export class CategoryFormComponent implements OnInit {

  mode: "NEW" | "UPDATE" = "NEW";
  categoryId?: number;
  category?: Category;
  selectedCategory?: Category;
  categories: Category[] = [];

  constructor(private route: ActivatedRoute,
    private itemService: ItemService,
    private categoryService: CategoryService) { }

  ngOnInit(): void {
    
  }

}

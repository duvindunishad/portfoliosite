import { Component, OnInit } from '@angular/core';
import { CategoriesService, Category } from 'products/src';
import { Router } from '@angular/router';
//import { CategoriesService } from '../../../../../products/src/lib/services/categories.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'admin-categories-list',
  templateUrl: './categories-list.component.html',
  styles: [
  ]
})
export class CategoriesListComponent implements OnInit{

  categories: Category[] = [];
  constructor(private CategoriesService: CategoriesService){}
  ngOnInit(): void {
    this.CategoriesService.getCategories().subscribe((cats) => {
    this.categories = cats;});

}
}
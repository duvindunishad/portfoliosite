import { Component, OnInit } from '@angular/core';
import { CategoriesService, Category } from 'products/src';
import { Router } from '@angular/router';
//import { CategoriesService } from '../../../../../products/src/lib/services/categories.service';
import { ConfirmEventType, ConfirmationService, MessageService } from 'primeng/api';
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
  constructor(
    private CategoriesService: CategoriesService, 
    private messageService: MessageService,
    private confirmationService: ConfirmationService
    ){}
  ngOnInit(): void {
    this._getCategories()
}
deleteCategory(categoriesId : string) {

  this.confirmationService.confirm({
    message: 'Are you sure to delete this category?',
    header: 'Delete category',
    icon: 'pi pi-exclamation-triangle',
    accept: () => {
      this.CategoriesService.deleteCategory(categoriesId).subscribe
      (Response =>{
        this._getCategories()
        this.messageService.add({severity:'success', summary:'success', detail:'Category deleted succesfuly'});
      },
      (error)=>
      {
        this.messageService.add({severity:'error', summary:'error', detail:'Category not deleted'});
      });
    },
    reject: (type: any) => {
    //     switch(type) {
    //         case ConfirmEventType.REJECT:
    //             this.messageService.add({severity:'error', summary:'Rejected', detail:'You have rejected'});
    //         break;
    //         case ConfirmEventType.CANCEL:
    //             this.messageService.add({severity:'warn', summary:'Cancelled', detail:'You have cancelled'});
    //         break;
    //     }
     }
});

}

private _getCategories(){
  this.CategoriesService.getCategories().subscribe((cats) => {
  this.categories = cats;
});
}
}
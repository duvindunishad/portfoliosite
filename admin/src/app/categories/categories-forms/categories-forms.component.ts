import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MessageService } from 'primeng/api';
import { CategoriesService, Category } from 'products/src';
import { timer } from 'rxjs';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'admin-categories-forms',
  templateUrl: './categories-forms.component.html',
  styles: [
  ]
})
export class CategoriesFormsComponent implements OnInit {

  'form':FormGroup;
  isSubmitted = false;
  editmode = false;
  'currentCategoryId': string;

  constructor(
    private messageService: MessageService, 
    private formBuilder: FormBuilder, 
    private CategoriesService: CategoriesService,
    private location: Location,
    private route: ActivatedRoute
    ) {}

  ngOnInit(): void{
    this.form = this.formBuilder.group({
      name: ['',Validators.required],
      icon: ['',Validators.required],
      color: ['#fff']
    });
    this._checkEditMode();
  }
  onSubmit(){
    this.isSubmitted = true;
    if(this.form.invalid){
      return;
    }

    const category : Category = {
      id: this.currentCategoryId,
      name: this.categoryForm['name'].value,
      icon: this.categoryForm['icon'].value,
      color: this.categoryForm['color'].value
    };
    if(this.editmode){
      this._updateCategory(category)
    }else{
      this._addCategory(category)
    }

  }

  private _addCategory(category: Category){

    this.CategoriesService.createCategory(category).subscribe((category) => {
      this.messageService.add(
        {severity:'success', 
        summary:'success', 
        detail:'Category created succesfuly'});
      timer(2000).toPromise().then((done) =>{
        this.location.back();
      });
    },
    (error)=>
    {
      this.messageService.add(
        {severity:'error', 
        summary:'error', 
        detail:'Category not created'});
    }
    );
  }

  private _checkEditMode(){
    this.route.params.subscribe(params => {
      if(params['id']){
        this.editmode =true;
        this.currentCategoryId = params['id']
        this.CategoriesService.getCategory(params['id']).subscribe(category =>{
          this.categoryForm['name'].setValue(category['name']);
          this.categoryForm['icon'].setValue(category['icon']);
          this.categoryForm['color'].setValue(category['color']);
        });
      }
    });
  }

  private _updateCategory(category: Category){

    this.CategoriesService.updateCategory(category).subscribe((response) => {
      this.messageService.add(
        {severity:'success', 
        summary:'success', 
        detail:'Category update succesfuly'});
      timer(2000).toPromise().then((done) =>{
        this.location.back();
      });
      //have to build
    },
    (error)=>
    {
      this.messageService.add(
        {severity:'error', 
        summary:'error', 
        detail:'Category not updated'
    });
    })
  }
  get categoryForm(){
    return this.form.controls;
  }
}

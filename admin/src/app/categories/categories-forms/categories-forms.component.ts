import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MessageService } from 'primeng/api';
import { CategoriesService, Category } from 'products/src';
import { timer } from 'rxjs';
import { Location } from '@angular/common';

@Component({
  selector: 'admin-categories-forms',
  templateUrl: './categories-forms.component.html',
  styles: [
  ]
})
export class CategoriesFormsComponent implements OnInit {

  'form':FormGroup;
  isSubmitted = false;

  constructor(private messageService: MessageService, private formBuilder: FormBuilder, private CategoriesService: CategoriesService,
    private location: Location
    ) {}

  ngOnInit(): void{
    this.form = this.formBuilder.group({
      name: ['',Validators.required],
      icon: ['',Validators.required]
    });
  }
  onSubmit(){
    this.isSubmitted = true;
    if(this.form.invalid){
      return;
    }

    const category : Category = {
      name: this.categoryForm['name'].value,
      icon: this.categoryForm['icon'].value
    }
    this.CategoriesService.createCategory(category).subscribe(Response => {
      this.messageService.add({severity:'success', summary:'success', detail:'Category created succesfuly'});
      timer(2000).toPromise().then(done =>{
        this.location.back();
      })
      //have to build
    },
    (error)=>
    {
      this.messageService.add({severity:'error', summary:'error', detail:'Category not created'});
    });
  }

  get categoryForm(){
    return this.form.controls;
  }
}

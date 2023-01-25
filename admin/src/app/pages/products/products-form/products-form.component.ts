//import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService, Category, Product, ProductsServices } from 'products/src';
import { MessageService } from 'primeng/api';
import { Subject, timer } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'admin-products-form',
  templateUrl: './products-form.component.html',
  styles: [
  ]
})
export class ProductsFormComponent {

  editmode = false;
  'form': FormGroup;  
  isSubmitted = false;
  categories: Category[] = []; 
  'imageDisplay': string | ArrayBuffer | null;
  'currentProductId': string;
  // endsubs$: Subject<any> = new Subject();
  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsServices,
    private categoriesService: CategoriesService,
    private messageService: MessageService,
    private location: Location,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._initForm();
    this._getCategories();
    this._checkEditMode();
  }

  // ngOnDestroy() {
  //   this.endsubs$.next();
  //   this.endsubs$.complete();
  // }

  private _initForm() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      brand: ['', Validators.required],
      price: ['', Validators.required],
      category: ['', Validators.required],
      countInStock: ['', Validators.required],
      description: ['', Validators.required],
      richDescription: [''],
      image: ['', Validators.required],
      isFeatured: [false]
    });
  }

  private _getCategories() {
    this.categoriesService
      .getCategories()
      // .pipe(takeUntil(this.endsubs$))
      .subscribe(categories => {
       this.categories = categories;
      });
  }

  private _addProduct(productData: FormData){

    this.productsService.createProduct(productData).subscribe((product: Product) => {
      this.messageService.add(
        {severity:'success', 
        summary:'success', 
        detail:'product created succesfuly'});
      timer(1000).toPromise().then(() =>{
        this.location.back();
      });
    },
    ()=>
    {
      this.messageService.add(
        {severity:'error', 
        summary:'error', 
        detail:'product not created'});
    }
    );
  }



  onImageUpload(event: any){
    const file = event.target.files[0];
    if(file) {
      this.form.patchValue({image: file});
      this.form.updateValueAndValidity();
      const fileReader = new FileReader();
      fileReader.onload =() =>{
        this.imageDisplay = fileReader.result
      };
      fileReader.readAsDataURL(file);
    }
  }



  // private _updateProduct(productFormData: FormData) {
  //   this.productsService
  //     .updateProduct(productFormData, this.currentProductId)
  //     .pipe(takeUntil(this.endsubs$))
  //     .subscribe(
  //       () => {
  //         this.messageService.add({
  //           severity: 'success',
  //           summary: 'Success',
  //           detail: 'Product is updated!'
  //         });
  //         timer(2000)
  //           .toPromise()
  //           .then(() => {
  //             this.location.back();
  //           });
  //       },
  //       () => {
  //         this.messageService.add({
  //           severity: 'error',
  //           summary: 'Error',
  //           detail: 'Product is not updated!'
  //         });
  //       }
  //     );
  // }

  private _checkEditMode() {
    this.route.params.subscribe((params) => {
      if (params['id']) {
        this.editmode = true;
        this.currentProductId = params['id'];
        this.productsService
          .getProduct(params['id'])
          
          .subscribe((products) => {
            this.productForm['name'].setValue(products.name);
            this.productForm['category'].setValue(products.category);
            this.productForm['brand'].setValue(products.brand);
            this.productForm['price'].setValue(products.price);
            this.productForm['countInStock'].setValue(products.countInStock);
            this.productForm['isFeatured'].setValue(products.isFeatured);
            this.productForm['description'].setValue(products.description);
            this.productForm['richDescription'].setValue(products.richDescription);
           // this.imageDisplay = products.image;
            // this.productForm['image'].setValidators([]);
            // this.productForm['image'].updateValueAndValidity();
          });
      }
    });
  }

  onSubmit() {
    this.isSubmitted = true;
    if (this.form.invalid) return;

   const productFormData = new FormData();
   Object.keys(this.productForm).map((key) => {
    console.log(key);
    console.log(this.productForm[key].value);
    productFormData.append(key, this.productForm[key].value);
   });
   this._addProduct(productFormData);

   
  //     productFormData.append(key, this.productForm[key].value);
  //   });
  //   if (this.editmode) {
  //     this._updateProduct(productFormData);
  //   } else {
  //     this._addProduct(productFormData);
  //   }
  // }
  // onCancle() {
  //   this.location.back();
  // }

  //onImageUpload(event) {
  //   const file = event.target.files[0];
  //   if (file) {
  //     this.form.patchValue({ image: file });
  //     this.form.get('image').updateValueAndValidity();
  //     const fileReader = new FileReader();
  //     fileReader.onload = () => {
  //       this.imageDisplay = fileReader.result;
  //     };
  //     fileReader.readAsDataURL(file);
   // }
 }
  
  get productForm() {
    return this.form.controls;
  }
  onCancle() {
   this.location.back();
  }
}

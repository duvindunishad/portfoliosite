import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule, Routes } from '@angular/router';
import { appRoutes } from './app.routes';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ShellComponent } from './shared/shell/shell.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { CategoriesListComponent } from './categories/categories-list/categories-list.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import {CardModule} from 'primeng/card';
import {ToolbarModule} from 'primeng/toolbar';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Category } from 'products/src';
import { CategoriesFormComponent } from './categories/categories-form/categories-form.component';

//import { ProductsListComponent } from './pages/products/products-list/products-list.component';
//import { ProductsFormComponent } from './pages/products/products-form/products-form.component';
//import { UsersListComponent } from './pages/users/users-list/users-list.component';
//import { UsersFormComponent } from './pages/users/users-form/users-form.component';
//import { JwtInterceptor, UsersModule } from 'users/src';

import { CategoriesService } from 'products/src';

import { ConfirmationService, MessageService } from 'primeng/api';

//import { ColorPickerModule } from 'primeng/colorpicker';
//import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';
//import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputSwitchModule } from 'primeng/inputswitch';
import { EditorModule } from 'primeng/editor';
import { TagModule } from 'primeng/tag';
import { InputMaskModule } from 'primeng/inputmask';
//import { OrdersListComponent } from './pages/orders/orders-list/orders-list.component';
//import { OrdersDetailComponent } from './pages/orders/orders-detail/orders-detail.component';
import { FieldsetModule } from 'primeng/fieldset';
import { CategoriesFormsComponent } from './categories/categories-forms/categories-forms.component';
//import { AppRoutingModule } from './app-routing.module';
//import { StoreModule } from '@ngrx/store';
//import { EffectsModule } from '@ngrx/effects';
import {InputTextModule} from 'primeng/inputtext';
import {ToastModule} from 'primeng/toast';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ColorPickerModule} from 'primeng/colorpicker';
import { ProductsListComponent } from './pages/products/products-list/products-list.component';
import { ProductsFormComponent } from './pages/products/products-form/products-form.component';
import {InputNumberModule} from 'primeng/inputnumber';
import {InputTextareaModule} from 'primeng/inputtextarea';
import { UsersListComponent } from './pages/users/users-list/users-list.component';
import { UsersFormComponent } from './pages/users/users-form/users-form.component';

const UX_MODULE = [
  CardModule,
  ToastModule,
  InputTextModule,
  TableModule,
  ToolbarModule,
  ButtonModule,
  ConfirmDialogModule,
  ColorPickerModule,
  InputNumberModule,
  DropdownModule,
  InputTextareaModule,
  InputSwitchModule,
  EditorModule,
  TagModule,
  InputMaskModule,
  FieldsetModule
]

const Routes: Routes = [
  { 
  path: '', 
  component: ShellComponent,
  children: [
    {
      path: 'dashboard',
      component: DashboardComponent
    },
    {
      path: 'categories',
      component: CategoriesListComponent
    },
    {
      path: 'categories/categories-forms',
      component: CategoriesFormsComponent
    },
    {
      path: 'categories/categories-forms/:id',
      component: CategoriesFormsComponent
    },

    {
      path: 'products',
      component: ProductsListComponent
    },
    {
      path: 'products/products-form',
      component: ProductsFormComponent
    },
    {
      path: 'products/products-form/:id',
      component: ProductsFormComponent
    },
    {
      path: 'users',
      component: UsersListComponent
    },
    {
      path: 'users/users-form',
      component: UsersFormComponent
    },
    {
      path: 'users/users-form/:id',
      component: UsersFormComponent
    }
  ]
 }
];
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ShellComponent,
    DashboardComponent,
    CategoriesListComponent,
    CategoriesFormComponent,
    CategoriesFormsComponent,
    ProductsListComponent,
    ProductsFormComponent,
    UsersListComponent,
    UsersFormComponent
 //   UsersFormComponent,
 //   OrdersListComponent,
 //   OrdersDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(Routes, { initialNavigation: 'enabledBlocking' }), UX_MODULE,

  ],
  providers: [Category, CategoriesService, MessageService,ConfirmationService],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router,Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { CategoryComponent } from './components/category/category.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

const route : Routes = [
  {path: '', component:WelcomeComponent},
  {path: 'products',component:ProductComponent},
  {path: 'categories',component:CategoryComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CategoryComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(route)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

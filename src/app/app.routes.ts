import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { NgModule } from '@angular/core';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: 'products', component: ProductComponent },
    { path: '', redirectTo: '/products', pathMatch: 'full' },
    { path: 'home', component: HomeComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
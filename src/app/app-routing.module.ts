import {RouterModule, Routes} from "@angular/router";
import {ProductsComponent} from './components/products/products.component';
import {HomeComponent} from './components/home/home.component';
import {ProductAddComponent} from './components/product-add/product-add.component';
import {ProductUpdateComponent} from './components/product-update/product-update.component';

const appRoutes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: 'newProduct', component: ProductAddComponent },
  { path: 'updateProduct/:id', component: ProductUpdateComponent },
  { path: '', component: HomeComponent },
];

export const routing = RouterModule.forRoot(appRoutes);

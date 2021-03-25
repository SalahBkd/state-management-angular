import {RouterModule, Routes} from "@angular/router";
import {ProductsComponent} from './components/products/products.component';
import {HomeComponent} from './components/home/home.component';

const appRoutes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: '', component: HomeComponent },
];

export const routing = RouterModule.forRoot(appRoutes);

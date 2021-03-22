import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProductsService} from '../../services/products.service';
import {Product} from '../../models/product.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  formProductGroup?:  FormGroup;
  submitted: boolean = false;

  constructor(private formBuilder: FormBuilder, private productsService: ProductsService, private router: Router) { }

  ngOnInit(): void {
    this.formProductGroup = this.formBuilder.group({
      name: ['', Validators.required],
      price: [0, Validators.required],
      quantity: [0, Validators.required],
      selected: [true, Validators.required],
      available: [true, Validators.required]
    });
  }

  onSaveProduct(product: Product) {
    this.submitted = true;
    if(this.formProductGroup?.invalid) return;
   this.productsService.addProduct(product)
     .subscribe(() => {
       alert("Product Saved Successfully !");
       this.router.navigateByUrl('/products');
     });
  }
}

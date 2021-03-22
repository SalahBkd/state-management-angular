import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductsService} from '../../services/products.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Product} from '../../models/product.model';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  productId?: number;
  formProductGroup: FormGroup;
  submitted: boolean = false;

  constructor(private activatedRoute: ActivatedRoute,
              private productsService: ProductsService,
              private formBuilder: FormBuilder,
              private router: Router) {
    this.productId = activatedRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    this.productsService.getProduct(this.productId)
      .subscribe(product => {
        this.formProductGroup = this.formBuilder.group({
          id: [product.id],
          name: [product.name, Validators.required],
          price: [product.price, Validators.required],
          quantity: [product.quantity, Validators.required],
          selected: [product.selected, Validators.required],
          available: [product.available, Validators.required],
        })
      });
  }

  onUpdateProduct(product: Product) {
    this.productsService.updateProduct(product)
      .subscribe(data =>  {
        alert("Product updated successfully !");
        this.router.navigateByUrl('/products');
      })
  }
}

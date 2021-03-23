import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActionEvent, ProductActionsTypes} from '../../../state/product.state';
import {EventDriverService} from '../../../state/event.driver.service';

@Component({
  selector: 'app-products-navbar',
  templateUrl: './products-navbar.component.html',
  styleUrls: ['./products-navbar.component.css']
})
export class ProductsNavbarComponent implements OnInit {

  @Output() productEventEmitter: EventEmitter<ActionEvent> = new EventEmitter();

  constructor(private eventDriverService: EventDriverService) { }

  ngOnInit(): void {
  }

  onGetAllProducts() {
    //this.productEventEmitter.emit({type: ProductActionsTypes.GET_ALL_PRODUCTS, payload: null});
    this.eventDriverService.publicEvent({type: ProductActionsTypes.GET_ALL_PRODUCTS, payload: null});
  }

  onGetSelectedProducts() {
    //this.productEventEmitter.emit({type: ProductActionsTypes.GET_SELECTED_PRODUCTS, payload: null});
    this.eventDriverService.publicEvent({type: ProductActionsTypes.GET_SELECTED_PRODUCTS, payload: null});
  }

  onGetAvailableProducts() {
    //this.productEventEmitter.emit({type: ProductActionsTypes.GET_AVAILABLE_PRODUCTS, payload: null});
    this.eventDriverService.publicEvent({type: ProductActionsTypes.GET_AVAILABLE_PRODUCTS, payload: null});
  }

  onSearchProducts(dataForm: any) {
    //this.productEventEmitter.emit({type: ProductActionsTypes.SEARCH_PRODUCTS, payload: dataForm});
    this.eventDriverService.publicEvent({type: ProductActionsTypes.SEARCH_PRODUCTS, payload: dataForm});
  }

  onAddProduct() {
    //this.productEventEmitter.emit({type: ProductActionsTypes.NEW_PRODUCT, payload: null});
    this.eventDriverService.publicEvent({type: ProductActionsTypes.NEW_PRODUCT, payload: null});
  }
}

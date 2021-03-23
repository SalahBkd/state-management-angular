import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs';
import {ActionEvent, AppDataState, DataStateEnum, ProductActionsTypes} from '../../../state/product.state';
import {Product} from '../../../models/product.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  @Input() productsInput$: Observable<AppDataState<Product[]>> | null = null;
  //@Output() productEventEmitter: EventEmitter<ActionEvent> = new EventEmitter();
  readonly dataStateEnum = DataStateEnum;

  constructor() { }

  ngOnInit(): void {
  }
  /*
  onProductSelect(product: Product) {
    this.productEventEmitter.emit({type: ProductActionsTypes.SELECT_PRODUCT, payload: product});
  }

  onProductUpdate(product: Product) {
    this.productEventEmitter.emit({type: ProductActionsTypes.UPDATE_PRODUCT, payload: product});
  }

  onProductDelete(product: Product) {
    this.productEventEmitter.emit({type: ProductActionsTypes.DELETE_PRODUCT, payload: product});
  }

  onActionEvent($event: ActionEvent) {
    this.productEventEmitter.emit($event);
  }*/
}

import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../../../../models/product.model';
import {ActionEvent, ProductActionsTypes} from '../../../../state/product.state';
import {EventDriverService} from '../../../../state/event.driver.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product?: Product | null = null;
  @Output() productEventEmitter: EventEmitter<ActionEvent> = new EventEmitter();

  constructor(private eventDriverService: EventDriverService) { }

  ngOnInit(): void {
  }

  onProductSelect(product: Product) {
    //this.productEventEmitter.emit({type: ProductActionsTypes.SELECT_PRODUCT, payload: product});
    this.eventDriverService.publicEvent({type: ProductActionsTypes.SELECT_PRODUCT, payload: product});
  }

  onProductUpdate(product: Product) {
    //this.productEventEmitter.emit({type: ProductActionsTypes.UPDATE_PRODUCT, payload: product});
    this.eventDriverService.publicEvent({type: ProductActionsTypes.UPDATE_PRODUCT, payload: product});
  }

  onProductDelete(product: Product) {
   // this.productEventEmitter.emit({type: ProductActionsTypes.DELETE_PRODUCT, payload: product});
    this.eventDriverService.publicEvent({type: ProductActionsTypes.DELETE_PRODUCT, payload: product});
  }

}

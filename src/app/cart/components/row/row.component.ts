import { Component, Input } from '@angular/core';
import { ProductToOrder } from 'src/app/products/interfaces/productToOrder.interface';

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css'],
})
export class RowComponent {
  @Input() product!: ProductToOrder;
}

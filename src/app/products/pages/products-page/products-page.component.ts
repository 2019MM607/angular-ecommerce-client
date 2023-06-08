import { Component, OnInit, inject } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../interfaces/product.interface';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css'],
})
export class ProductsPageComponent implements OnInit {
  public productService = inject(ProductsService);

  constructor() {}
  ngOnInit(): void {
    this.productService.getProducts();
  }

  get products(): Product[] {
    return this.productService.products;
  }
}

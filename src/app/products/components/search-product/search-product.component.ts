import { Component, inject } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.css'],
})
export class SearchProductComponent {
  public search: string = '';
  public productService = inject(ProductsService);

  onSearch(): void {
    this.search.length > 0
      ? this.productService.getProductsByName(this.search)
      : this.productService.getProducts();
  }
}

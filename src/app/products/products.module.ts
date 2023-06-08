import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { SharedModule } from '../shared/shared.module';
import { SearchProductComponent } from './components/search-product/search-product.component';
import { FormsModule } from '@angular/forms';
import { ProductCardComponent } from './components/product-card/product-card.component';

@NgModule({
  declarations: [
    ProductsPageComponent,
    ProductPageComponent,
    LayoutComponent,
    SearchProductComponent,
    ProductCardComponent,
  ],
  imports: [CommonModule, SharedModule, ProductsRoutingModule, FormsModule],
})
export class ProductsModule {}

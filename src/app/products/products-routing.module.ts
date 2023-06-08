import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,

    children: [
      {
        path: 'view',
        component: ProductsPageComponent,
      },
      {
        path: ':id',
        component: ProductPageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}

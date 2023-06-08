import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { RouterModule } from '@angular/router';
import { RowComponent } from './components/row/row.component';

@NgModule({
  declarations: [CartPageComponent, RowComponent],
  imports: [CommonModule, SharedModule, RouterModule],
  exports: [CartPageComponent],
})
export class CartModule {}

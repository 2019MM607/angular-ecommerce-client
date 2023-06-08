import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NabarComponent } from './components/nabar/nabar.component';
import { RouterModule } from '@angular/router';
import { HeroPageComponent } from './components/hero-page/hero-page.component';

@NgModule({
  declarations: [NabarComponent, HeroPageComponent],
  imports: [CommonModule, RouterModule],
  exports: [NabarComponent, HeroPageComponent],
})
export class SharedModule {}

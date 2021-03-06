import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { BookCardComponent } from './book-card/book-card.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [HomeComponent, BookCardComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    PaginationModule,
    FormsModule,
    SharedModule
  ]
})
export class HomeModule { }

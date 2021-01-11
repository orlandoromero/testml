import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailProductComponent } from './components/detail-product/detail-product.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import {ButtonModule} from 'primeng/button';
import {DataViewModule} from 'primeng/dataview';
import {FocusTrapModule} from 'primeng/focustrap';
import {InputTextModule} from 'primeng/inputtext';
import {CardModule} from 'primeng/card';


@NgModule({
  declarations: [
    AppComponent,
    DetailProductComponent,
    SearchResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    DataViewModule,
    FocusTrapModule,
    InputTextModule,
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { DetailProductComponent } from './components/detail-product/detail-product.component';

const routes: Routes = [
  { path: './', component: AppComponent},
  { path: 'items?search=/:query', component: SearchResultsComponent},
  { path: 'detail-product/:id', component: DetailProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

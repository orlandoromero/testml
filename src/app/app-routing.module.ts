import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { DetailProductComponent } from './components/detail-product/detail-product.component';

const routes: Routes = [
  { path: 'search-results', component: SearchResultsComponent},
  { path: 'detail-product', component: DetailProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

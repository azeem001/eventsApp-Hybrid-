import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule'  },
  { path: 'home', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'stay22', loadChildren: './stay22/stay22.module#Stay22PageModule' },
  { path: 'test', loadChildren: './test/test.module#TestPageModule' },
  { path: 'product-details/:categoryId/:productId', loadChildren: './product-details/product-details.module#ProductDetailsPageModule' },
  { path: 'list-products/:id', loadChildren: './list-products/list-products.module#ListProductsPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

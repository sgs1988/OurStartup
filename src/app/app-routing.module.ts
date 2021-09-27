import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)},
  {path: 'about', loadChildren: () => import('./modules/about/about.module').then(m => m.AboutModule)},
  {path: 'service', loadChildren: () => import('./modules/service/service.module').then(m => m.ServiceModule)},
  {path: 'portfolio', loadChildren: () => import('./modules/portfolio/portfolio.module').then(m => m.PortfolioModule)},
  {path: 'whyus', loadChildren: () => import('./modules/why-us/why-us.module').then(m => m.WhyUsModule)},
  {path: 'blog', loadChildren: () => import('./modules/blog/blog.module').then(m => m.BlogModule)},
  {path: 'contact', loadChildren: () => import('./modules/contact/contact.module').then(m => m.ContactModule)},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

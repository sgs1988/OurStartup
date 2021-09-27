import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceRoutingModule } from './service-routing.module';
import { ServiceComponent } from './service.component';
import { WebsiteDesignComponent } from './website-design/website-design.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';


@NgModule({
  declarations: [
    ServiceComponent,
    WebsiteDesignComponent,
    EcommerceComponent
  ],
  imports: [
    CommonModule,
    ServiceRoutingModule
  ]
})
export class ServiceModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './modules/material.module';
import { Globals } from './models/globals';
import { ApiService } from './services/api.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DisableFormsDirective } from './directives/disable-forms.directive';

@NgModule({
  entryComponents:[],
  declarations: [DisableFormsDirective],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule
  ],
  exports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    DisableFormsDirective
  ],
  providers: [Globals, ApiService]
})
export class SharedModule { }

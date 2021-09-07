import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiDocumentComponent } from './ui-document.component';
import { UiDocumentRoutingModule } from './ui-document.router';
import { SharedModule } from '../_shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    UiDocumentRoutingModule,
    SharedModule
  ],
  declarations: [
    UiDocumentComponent
  ]
})

export class UiDocumentModule { }
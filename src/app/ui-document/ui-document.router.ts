import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UiDocumentComponent } from './ui-document.component';

const routes: Routes = [
  {
    path: '',
    component: UiDocumentComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})

export class UiDocumentRoutingModule { }

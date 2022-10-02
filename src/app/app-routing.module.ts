import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImageDocumentationComponent } from './image-documentation/image-documentation.component';

const routes: Routes = [
  {path:'hell', component:ImageDocumentationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

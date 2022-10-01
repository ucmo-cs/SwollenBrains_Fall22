import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-documentation',
  templateUrl: './image-documentation.component.html',
  styleUrls: ['./image-documentation.component.css']
  
})
export class ImageDocumentationComponent {

  isExpanded: boolean = false;

  //will later pull names of images from database
  imgNames: string[] = ['assets/images/20201013_205543.jpg'];
  // imgNames: string[] = ['./20201013_205543.jpg'];
  


  onClick(){
    this.isExpanded = !this.isExpanded;
  }

}

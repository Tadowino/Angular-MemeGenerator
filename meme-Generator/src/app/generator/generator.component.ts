import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrl: './generator.component.css'
})
export class GeneratorComponent {
//Select canvas
@ViewChild('memeCanvas', {static: false})myCanvas:any;

preview(e:any){
  //capturing canvas
  let canvas = this.myCanvas.nativeElement;
  //preparing the canvas for drawing
  let ctx = canvas.getContext('2d');
  //create an instance of  filereader
  let render = new FileReader();
  //read specific file directly from its location
  render.readAsDataURL(e.target.files[0]);

  render.onload = function(event:any){
    //create an image
    const img = new Image();
    //assingn immage to file data
    img.src = event.target.result as string;
    img.onload = function(){
      //draw image
      ctx.drawImage(img, 60, 50 , 700, 800);
    } 

  }


}

}

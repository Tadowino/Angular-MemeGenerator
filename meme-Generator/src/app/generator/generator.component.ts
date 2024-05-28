import { Component, ViewChild } from '@angular/core';
import { ColorEvent } from 'ngx-color';

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrl: './generator.component.css'
})
export class GeneratorComponent {
//Select canvas
@ViewChild('memeCanvas', {static: false})myCanvas:any;
topText:string = '';
bottomText:string = '';
fileEvent:any;
textColor:string = '#000000';
background:string = '#FFFFFF';

preview(e:any){
  //capturing canvas
  this.fileEvent = e;
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
      ctx.drawImage(img, 50, 150 , 600, 500);
    } 
  }
}
drawText(){
  let canvas = this.myCanvas.nativeElement;
  let ctx = canvas.getContext('2d');
  
  ctx.clearRect(0,0, canvas.width, canvas.height);
  ctx.fillStyle = this.background;
  ctx.fillRect(0,0, canvas.width, canvas.height);
  this.preview(this.fileEvent);
  ctx.fillStyle = this.textColor;
  ctx.font = '50px Comic Sans MS';
  ctx.textAlign = 'center';
  ctx.fillText(this.topText, canvas.width/2, 100); 
  ctx.fillText(this.bottomText, canvas.width/2, 750); 
}
canvasTextColor($event:ColorEvent){
 this.textColor = $event.color.hex;
 this.drawText();
}
canvasBgColor($event:ColorEvent){
  this.background = $event.color.hex;
 this.drawText();
}
download(){
  let canvas = this.myCanvas.nativeElement;
  let image = canvas.toDataURL('image/png');
  let link = document.createElement('a');
  link.download = 'memeImg.png';
  link.href = image;
  link.click();
}

}
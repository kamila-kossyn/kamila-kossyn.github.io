import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-image[path]',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {

  @Input() path: string  = '';
  @Input() width: string  = '100%';
  @Input() height: string  = '100%';
  public get styleContainer(): any {
    let x: any = {
      background: 'transparent url('+this.imgSrc+') center center/cover no-repeat content-box local'
    };
    return x;
  };
  public get styleImg(): any {
    let x: any = {};
    if(this.width != '') {
      x.width = this.width;
    }
    if(this.height != '') {
      x.height = this.height;
    }
    return x;
  };
  constructor() { }
  ngOnInit(): void {
    
  }

  private _classes: string = '';
  public get classes(): string {
    return this._classes
  }

  public get imgSrc(): string {
    return 'assets/'+this.path;
  }

}

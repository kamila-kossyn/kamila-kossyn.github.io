import { Component, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-image[path]',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {

  @Input() path: string  = '';
  @Input() width: string  = '100%';
  @Input() height: string  = '100%';
  @Input() crop: boolean = true;
  @Input() showContentOnHover: boolean = true;
  @Input() onClicked: (() => void) | null = null;

  public onClickedCallback(): void {
    if(this.onClicked != null) {
      this.onClicked();
    }
  }


  public hoverContent: boolean = false;
  public hoverContainer: boolean = false;
  public hoverImg: boolean = false;
  public get hover(): boolean {
    return this.hoverContent || this.hoverContainer || this.hoverImg;
  }
  public get showContent(): boolean {
    return (this.hover && this.showContentOnHover) || (this.showContentOnHover == false);
  }
  public get styleContainer(): any {
    let x: any = {
      'z-index': '0'
    }
    if(this.crop) {
      x.background = 'transparent url('+this.imgSrc+') center center/cover no-repeat content-box local';
    }
    if(this.showContent) {
      x['filter'] = 'blur(2px)';
    }
    return x;
  };
  public get styleImg(): any {
    let x: any = {
      'max-width': '100%',
      'max-height': '100%',
      'opacity': '0'
    };
    if(this.width != '') {
      x.width = this.width;
    }
    if(this.height != '') {
      x.height = this.height;
    }
    return x;
  };
  public get styleContent(): any {
    let x: any = {
      'max-width': '100%',
      'max-height': '100%',
      'position': 'absolute',
      'display': 'flex',
      'justify-content': 'center',
      'align-items': 'center',
      'font-size': '1em',
      'z-index': '1',
      'background': 'transparent',
      'color': 'transparent'
    }
    if(this.width != '') {
      x.width = this.width;
    }
    if(this.height != '') {
      x.height = this.height;
    }
    if(this.showContent) {
      x.color = 'inherit';
      x['border-width'] = '1px';
      x['border-style'] = 'solid';
      x['box-sizing'] = 'border-box';
    }
    return x;
  }
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

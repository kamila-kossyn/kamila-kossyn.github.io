import { Injectable } from '@angular/core';

interface IScrollToData {
  name: string,
  top?: number,
  left?: number,
  element?: HTMLElement,
  scrollIntoViewOptions?: ScrollIntoViewOptions
}
@Injectable({
  providedIn: 'root'
})
export class ScrollToService {

  private scrollToData: Array<IScrollToData> = [];

  constructor() { }


  public addScrollToPosition(name: string, top:number, left:number, suffix: number = 0): string {
    if((this.scrollToData.findIndex((value)=>value.name == name) == -1) && (suffix == 0)) {
      this.scrollToData.push({name:name,top:top,left:left})
      return name;
    } else {
      let suffix_name = name + "_" + suffix;
      if (this.scrollToData.findIndex((value)=>value.name == suffix_name) == -1) {
        this.scrollToData.push({name:suffix_name,top:top,left:left})
        return suffix_name;
      } else {
        return this.addScrollToPosition(name,top,left,suffix);
      }
    }
  }

  public addScrollToElement(name: string, element: HTMLElement, scrollIntoViewOptions?: ScrollIntoViewOptions, suffix: number = 0): string {
    if(scrollIntoViewOptions == undefined) {
      scrollIntoViewOptions = {};
    }
    if(scrollIntoViewOptions.behavior == undefined) {
      scrollIntoViewOptions.behavior = 'smooth';
    }
    if(scrollIntoViewOptions.block == undefined) {
      scrollIntoViewOptions.block = 'start';
    }
    if(scrollIntoViewOptions.inline == undefined) {
      scrollIntoViewOptions.inline = 'center';
    }
    if((this.scrollToData.findIndex((value)=>value.name == name) == -1) && (suffix == 0)) {
      this.scrollToData.push({name:name,element:element, scrollIntoViewOptions: scrollIntoViewOptions})
      return name;
    } else {
      let suffix_name = name + "_" + suffix;
      if (this.scrollToData.findIndex((value)=>value.name == suffix_name) == -1) {
        this.scrollToData.push({name:suffix_name,element:element, scrollIntoViewOptions: scrollIntoViewOptions})
        return suffix_name;
      } else {
        return this.addScrollToElement(name,element,scrollIntoViewOptions,suffix);
      }
    }
  }

  public updateScrollToPosition(name: string, top:number, left:number): void {
    let index = this.scrollToData.findIndex((value)=>value.name ==name);
    if(index == -1) {
      return;
    }
    this.scrollToData[index].top = top;
    this.scrollToData[index].left = left;
  }

  private scrollToXY(top: number,left: number): void {
    console.log({
      left: left,
      top: top,
      behavior: 'smooth'
    })
    window.scrollTo({
      left: left,
      top: top,
      behavior: 'smooth'
    });
  }

  public scrollTo(name: string) {
    let scrollToItem = this.scrollToData.find((value)=>value.name == name);
    if (scrollToItem == undefined || scrollToItem == null) {
      return;
    }
    if (scrollToItem.top != undefined && scrollToItem.left != undefined) {
      this.scrollToXY(scrollToItem.top,scrollToItem.left)
    }
    if (scrollToItem.element != undefined) {
      scrollToItem.element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'center'
      })
    }
  }


  public get ScrollToData(): Array<IScrollToData> {
    return this.scrollToData;
  }
}

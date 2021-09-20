import { Injectable } from '@angular/core';
import { isDevMode } from '@angular/core';

interface IScrollToData {
  name: string,
  page: string,
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

  private addScrollTo(scrollToItem: IScrollToData): void {
    if(
      this.scrollToData.findIndex((value)=>{
        return value.name == scrollToItem.name && value.page == scrollToItem.page
      }) == -1
    ) {
      this.scrollToData.push(scrollToItem);
    } else {
      if(isDevMode()) {
        console.error("Doubled scroll to section on one page");
      }
    }
  }


  public addScrollToPosition(name: string, page: string, top:number, left:number, suffix: number = 0): void {
    this.addScrollTo({
      name: name,
      page: page,
      top: top,
      left: left
    });
  }

  public addScrollToElement(name: string, page:string, element: HTMLElement, scrollIntoViewOptions?: ScrollIntoViewOptions): void {
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
    this.addScrollTo({
      name: name,
      page: page,
      element: element,
      scrollIntoViewOptions: scrollIntoViewOptions
    });
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

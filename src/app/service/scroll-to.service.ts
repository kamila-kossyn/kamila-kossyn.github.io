import { Injectable } from '@angular/core';
import { isDevMode } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
import { util } from '../util/util';

export interface IScrollToData {
  name: string,
  page: string,
  id: string,
  element?: string,
  scrollIntoViewOptions?: ScrollIntoViewOptions
}
@Injectable({
  providedIn: 'root'
})
export class ScrollToService {

  private scrollToData: Array<IScrollToData> = [];
  private _scrollToDataUpdateEvent: ReplaySubject<Array<IScrollToData>> = new ReplaySubject<Array<IScrollToData>>(1);
  public get scrollToDataUpdateEvent(): Observable<Array<IScrollToData>> {
    return this._scrollToDataUpdateEvent;
  } 

  constructor() { }

  private addScrollTo(scrollToItem: IScrollToData): string {
    let index = this.scrollToData.findIndex((value) => { return value.id == scrollToItem.id } );
    if(index != -1) {
      this.scrollToData.splice(index,1);
    }
    let lengthId = 4;
    let element: string = util.makeid(lengthId);
    while(this.scrollToData.findIndex( (value) => value.element == element  ) != -1 ) {
      lengthId++;
      element = util.makeid(lengthId);
    }
    scrollToItem.element = element;
    this.scrollToData.push(scrollToItem);
    this._scrollToDataUpdateEvent.next(this.scrollToData);
    return element;
  }

  public addScrollToElement(name: string, page:string, scrollIntoViewOptions?: ScrollIntoViewOptions): string {
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
    let id = page+"_"+name;
    id = id.toLowerCase().replace(' ','_');
    return this.addScrollTo({
      name: name,
      page: page,
      scrollIntoViewOptions: scrollIntoViewOptions,
      id: id
    });
  }


  public scrollTo(name: string) {
    let scrollToItem = this.scrollToData.find((value)=>value.name == name);
    if (scrollToItem == undefined || scrollToItem == null) {
      return;
    }
    if (scrollToItem.element == '' || scrollToItem.element == null) {
      return;
    }
    let htmlelement: HTMLElement | null = document.querySelector('[data-scroll-to="'+scrollToItem.element+'"]');
    if(htmlelement == null) {
      return;
    }
    
    if (htmlelement != undefined) {
      htmlelement.scrollIntoView({
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

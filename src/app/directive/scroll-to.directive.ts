import { Directive, HostListener, Input } from '@angular/core';
import { ScrollToService } from '../service/scroll-to.service';

@Directive({
  selector: '[appScrollTo]'
})
export class ScrollToDirective {

  constructor(
    private scrollToService: ScrollToService,
  ) { }

  @Input() appScrollTo: string = '';

  @HostListener('click', ['$event']) onClick($event: any){
    this.scrollToService.scrollTo(this.appScrollTo);
  }
}

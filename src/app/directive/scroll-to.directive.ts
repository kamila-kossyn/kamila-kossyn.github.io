import { Directive, HostListener, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ScrollToService } from '../service/scroll-to.service';

@Directive({
  selector: '[appScrollTo]'
})
export class ScrollToDirective implements OnInit, OnChanges {

  constructor(
    private scrollToService: ScrollToService,
  ) { }

  ngOnInit(): void {
    this.checkAllRequiredFields();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.checkAllRequiredFields();
  }
  private checkAllRequiredFields(): void {
    this.checkRequiredFields(this.appScrollTo);
  }

  private checkRequiredFields(input: any): void {
    if(input === null) {
       throw new Error("Attribute 'a' is required");
    }
 }

  @Input() appScrollTo: string = '';

  @HostListener('click', ['$event']) onClick($event: any){
    this.scrollToService.scrollTo(this.appScrollTo);
  }
}

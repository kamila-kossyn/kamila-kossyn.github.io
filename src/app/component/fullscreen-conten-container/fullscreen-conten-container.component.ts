import { Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ScrollToService } from 'src/app/service/scroll-to.service';

@Component({
  selector: 'app-fullscreen-conten-container[scrollToName][page]',
  templateUrl: './fullscreen-conten-container.component.html',
  styleUrls: ['./fullscreen-conten-container.component.scss']
})
export class FullscreenContenContainerComponent implements OnInit {

  @Input() scrollToName: string = '';
  @Input() page: string = '';

  public elementIdScrollTo: string = '';
 
  constructor(
    private scrollToService: ScrollToService,
    private elementRef: ElementRef
  ) { }

  private get nativeELement(): HTMLElement {
    return this.elementRef.nativeElement;
  }


  ngOnInit(): void {
    this.elementIdScrollTo = this.scrollToService.addScrollToElement(this.scrollToName, this.page);
  }

}

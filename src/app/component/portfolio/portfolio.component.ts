import { AfterContentChecked, AfterViewChecked, Component, DoCheck, ElementRef, OnInit } from '@angular/core';
import { ScrollToService } from 'src/app/service/scroll-to.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  
  scrollToName: string = "Portfolio";

  constructor(
    private scrollToService: ScrollToService,
    private elementRef: ElementRef
  ) {
  }
  private get nativeELement(): HTMLElement {
    return this.elementRef.nativeElement;
  }

  ngOnInit(): void {
    this.scrollToName = this.scrollToService.addScrollToElement(this.scrollToName,this.nativeELement);
  }

}

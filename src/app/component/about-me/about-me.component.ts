import { AfterContentChecked, AfterViewChecked, Component, ElementRef, OnInit } from '@angular/core';
import { ScrollToService } from 'src/app/service/scroll-to.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
  
  scrollToName: string = "About Me";

  constructor(
    private scrollToService: ScrollToService,
    private elementRef: ElementRef
  ) {
  }
  private get nativeELement(): HTMLElement {
    return this.elementRef.nativeElement;
  }

  ngOnInit(): void {
    //this.scrollToName = this.scrollToService.addScrollToElement(this.scrollToName,this.nativeELement);
  }

}

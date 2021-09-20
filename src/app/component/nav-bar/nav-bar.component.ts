import { Component, OnInit } from '@angular/core';
import { ScrollToService } from 'src/app/service/scroll-to.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  public mobileMenuShow: boolean = false;

  public mobilePanelClass(): string {
    if(this.mobileMenuShow) return 'open';
    return 'close';
  }

  constructor(
    private scrollToService: ScrollToService
  ) { }

  ngOnInit(): void {
  }


  public get scrollToData() {
    return this.scrollToService.ScrollToData;
  } 
}

import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ScrollToService } from 'src/app/service/scroll-to.service';
import { BaseComponent } from '../BaseComponent';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent extends BaseComponent implements OnInit {
  public mobileMenuShow: boolean = false;

  public mobilePanelClass(): string {
    if(this.mobileMenuShow) return 'open';
    return 'close';
  }

  constructor(
    private scrollToService: ScrollToService,
    route:ActivatedRoute,
  ) {
    super(route);
  }

  ngOnInit(): void {
  }


  public get scrollToData() {
    console.log(this.currentUrl)
    return this.scrollToService.ScrollToData.filter((value)=>value.page == this.currentUrl);
  } 
}

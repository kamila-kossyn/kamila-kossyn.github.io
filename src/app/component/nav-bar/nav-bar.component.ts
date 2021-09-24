import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IScrollToData, ScrollToService } from 'src/app/service/scroll-to.service';
import { util } from 'src/app/util/util';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit, OnChanges {
  public mobileMenuShow: boolean = false;

  @Input() backButtonShow: boolean = false;

  public mobilePanelClass(): string {
    if(this.mobileMenuShow) return 'open';
    return 'close';
  }

  constructor(
    private scrollToService: ScrollToService
  ) {
    this.scrollToService.scrollToDataUpdateEvent.subscribe((x)=>{
      this.updateScrollToData();
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.updateScrollToData();
  }

  ngOnInit(): void {
    this.updateScrollToData();
  }

  private updateScrollToData(): void {
    console.log({"update":this.currentUrl});  
    this._scrollToData = this.scrollToService.ScrollToData.filter((value)=>value.page == this.currentUrl);
  }
  private _scrollToData: Array<IScrollToData> = [];
  public get scrollToData(): Array<IScrollToData> {
    return this._scrollToData;
  }


  public get currentUrl(): string {
    return util.currentUrl();
  }
}

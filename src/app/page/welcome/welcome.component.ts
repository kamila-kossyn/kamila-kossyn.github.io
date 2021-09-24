import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { util } from 'src/app/util/util';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  ngOnInit(): void {
  }
  public get currentUrl(): string {
    return util.currentUrl();
  }
}

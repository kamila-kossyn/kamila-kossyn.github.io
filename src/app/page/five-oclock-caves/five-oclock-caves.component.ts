import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { util } from 'src/app/util/util';

@Component({
  selector: 'app-five-oclock-caves',
  templateUrl: './five-oclock-caves.component.html',
  styleUrls: ['./five-oclock-caves.component.scss']
})
export class FiveOClockCavesComponent implements OnInit {

  constructor(route: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

  public get currentUrl(): string {
    return util.currentUrl();
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseComponent } from 'src/app/component/BaseComponent';

@Component({
  selector: 'app-five-oclock-caves',
  templateUrl: './five-oclock-caves.component.html',
  styleUrls: ['./five-oclock-caves.component.scss']
})
export class FiveOClockCavesComponent extends BaseComponent implements OnInit {

  constructor(route: ActivatedRoute) {
    super(route);
  }

  ngOnInit(): void {
  }

}

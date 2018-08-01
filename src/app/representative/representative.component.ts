import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Representative } from './representative.model';
import { RepresentativeService } from './representative.service';

@Component({
  selector: 'app-representative',
  templateUrl: './representative.component.html',
  styleUrls: ['./representative.component.css']
})
export class RepresentativeComponent implements OnInit, OnDestroy {
  representatives: Representative[];
  representativeSubscription: Subscription;

  constructor(
    private representativeService: RepresentativeService) { }

  ngOnInit() {
    this.representativeSubscription = this.representativeService
      .representativesChanged.subscribe(
        representatives => (this.representatives = representatives)
      );
    this.representativeService.fetchCurrentRepresentatives();
  }

  ngOnDestroy() {
    this.representativeSubscription.unsubscribe();
  }
}


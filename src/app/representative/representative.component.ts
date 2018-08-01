import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Representative } from './representative.model';
import { RepresentativeService } from './representative.service';
import { UIService } from '../shared/ui.service';

@Component({
  selector: 'app-representative',
  templateUrl: './representative.component.html',
  styleUrls: ['./representative.component.css']
})
export class RepresentativeComponent implements OnInit, OnDestroy {
  representatives: Representative[];
  private representativeSubscription: Subscription;
  isLoading = true;
  private loadingSubs: Subscription;

  constructor(
    private representativeService: RepresentativeService, private uiService: UIService) { }

  ngOnInit() {
    this.loadingSubs = this.uiService.loadingStateChanged.subscribe(
      isLoading => {
        this.isLoading = isLoading;
    });
    this.representativeSubscription = this.representativeService
      .representativesChanged.subscribe(
        representatives => (this.representatives = representatives)
      );
    this.representativeService.fetchCurrentRepresentatives();
  }

  ngOnDestroy() {
    this.loadingSubs.unsubscribe();
    this.representativeSubscription.unsubscribe();
  }
}


import { Component, OnInit } from '@angular/core';
import { RepresentativeService } from './representative.service';
import { Representative } from './representative.model';

@Component({
  selector: 'app-representative',
  templateUrl: './representative.component.html',
  styleUrls: ['./representative.component.css']
})
export class RepresentativeComponent implements OnInit {
  representatives: Representative[] = [];

  constructor(private representativeService: RepresentativeService) { }

  ngOnInit() {
    this.representatives = this.representativeService.getCurrentRepresentatives();
  }

}

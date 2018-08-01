import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { map } from 'rxjs/operators';
import { Subject, Subscription } from 'rxjs';

import { Representative } from './representative.model';

@Injectable()
export class RepresentativeService {
  representativesChanged = new Subject<Representative[]>();
  private currentRepresentatives: Representative[] = [];
  private fbsubs: Subscription[];

  constructor(private database: AngularFirestore) {}

  fetchCurrentRepresentatives() {
    this.fbsubs.push(this.database
      .collection('representatives')
      .snapshotChanges()
      .pipe(
        map(docArray => docArray.map(d => {
          const data = d.payload.doc.data() as Representative;
          const id = d.payload.doc.id;
          return { id, ...data };
        }))
      )
      .subscribe((representatives: Representative[]) => {
        this.currentRepresentatives = representatives;
        this.representativesChanged.next([...this.currentRepresentatives]);
      }));
  }

  cancelSubscriptions() {
    this.fbsubs.forEach(sub => sub.unsubscribe());
  }
}

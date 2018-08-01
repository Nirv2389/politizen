import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';


import { Representative } from './representative.model';

@Injectable()
export class RepresentativeService {
  representativesChanged = new Subject<Representative[]>();
  private currentRepresentatives: Representative[] = [];

  constructor(private database: AngularFirestore) {}

  fetchCurrentRepresentatives() {
    this.database
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
      });
  }
}

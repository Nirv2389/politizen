import { Representative } from './representative.model';


export class RepresentativeService {
  private currentRepresentatives: Representative[] = [
    {
      id: 'shiba',
      name: 'Shiba Hiroue Inu',
      terms: 2,
      location: 'IN',
      image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      title: 'Congressman'
    },
    {
      id: 'knope',
      name: 'Leslie Knope',
      terms: 20,
      location: 'IN',
      image: 'https://i.imgur.com/VouzssQ.png',
      title: 'Senator'
    }
  ];


  getCurrentRepresentatives() {
    return this.currentRepresentatives.slice();
  }
}

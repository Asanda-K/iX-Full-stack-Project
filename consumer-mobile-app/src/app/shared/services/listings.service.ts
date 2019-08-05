import { Listing } from '../models/listing.model';
import { Injectable} from '@angular/core';
import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';


@Injectable({
  providedIn: 'root'
})
export class ListingsService {
  private _listings: Listing[] = [

    new Listing(
      'L1',
      'Bright Modern Art Decor Atelier ',
      '../assets/airbnb.jpg',
      195.99,
      'Bright Modern Art Decor Studio Apartment in the heart of Cape Town.',
      ),
      new Listing(
        'L2',
        'Loft ',
        '../assets/airbnb1.jpg',
        299.00,
        'Bright Modern Art Decor Studio Apartment in the heart of Cape Town.',
        )

  ];


  get listings() {
    return [...this._listings];
  }

  constructor() { }
}


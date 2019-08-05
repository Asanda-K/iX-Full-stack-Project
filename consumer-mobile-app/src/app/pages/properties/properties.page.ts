import { Component, OnInit, } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Listing } from '.../shared/services/listing.service';
import { ListingsService } from './../shared/services/listings.service';


@Component({
  selector: 'app-properties',
  templateUrl: './properties.page.html',
  styleUrls: ['./properties.page.scss'],
})
export class PropertiesPage implements OnInit {

  loadedListings: Listing[];

  constructor(
    private navCtrl: NavController,
    private ListingsService: ListingsService
  ) { }

  ngOnInit() {
    this.loadedListings = this.ListingsService.listings;
  }
}

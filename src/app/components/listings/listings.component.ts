import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css']
})
export class ListingsComponent implements OnInit {
	lisings: any;


  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
  	this.firebaseService.getListings().subscribe(listings => {
  		console.log(listings);
  	});
  }

}

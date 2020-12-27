import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vehiclos-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  img= "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bugatti-chiron-pur-sport-106-1582836604.jpg";
  constructor() { }

  ngOnInit(): void {
  }

}

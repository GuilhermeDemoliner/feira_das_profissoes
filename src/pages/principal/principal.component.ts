import { Component, OnInit } from '@angular/core';
import {SwiperOptions} from "swiper";

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  public config : SwiperOptions;
  public images = [];
  constructor() { }

  ngOnInit() {
    this.images = [
      {src:'assets/images/banner1.jpg'},
      {src:'assets/images/banner2_1.jpg'},
      {src:'assets/images/banner3_2.jpg'},

    ]

    this.config  = {
      height: 300,
      autoHeight:true,
      pagination: {el: '.swiper-pagination', clickable: true},
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      spaceBetween: 30
    };
  }

}

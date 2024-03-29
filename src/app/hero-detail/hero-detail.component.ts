import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../Models/hero';

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  constructor() { }
  
  @Input() hero: Hero;

  ngOnInit() {
  }

}

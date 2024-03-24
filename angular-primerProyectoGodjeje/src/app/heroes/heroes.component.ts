import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent implements OnInit{
  heroes = HEROES;
  hero : Hero = {
    id: 1 , 
    name: 'Caballero pela Nabos'
  };
  constructor(){}

  ngOnInit(){}
}

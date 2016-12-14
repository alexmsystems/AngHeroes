import { Component } from '@angular/core';


import {FormControl,FormGroup} from '@angular/forms';

import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {HeroClass} from './HeroClass';
import {HeroDetailComponent} from './hero-detail.component';





@Component({
  selector: 'my-app',
  template: `
  <h1>{{title}}</h1> 
  <h2>{{hero.name}}</h2>
  <div>
    <label>id:</label> 
    {{hero.id}} 
  </div> 
  <div>
    <label>Name: </label> 
    <input [(ngModel)]="hero.name" placeholder="name" />
  </div>
  <ul class="heroes">
    <li *ngFor="let hero1 of heroes"
    (click)="onSelect(hero1)"
    >
      <span class="badge">{{hero1.id}}</span> {{hero1.name}}
    </li>
  </ul> 
  <my-hero-detail [hero1] = "selectedHero"> ...111 </my-hero-detail>
  `,
  directives: [HeroDetailComponent],
})
export class AppComponent  { 
  title = 'Tour of heroes';
  selectedHero: HeroClass; 
  hero: HeroClass = { 
    id: 1,
    name: 'Wingshtorm'
  };
  name = 'Angular'; 

  public heroes = HeroesItems;

  onSelect(myHero: HeroClass)
  { this.selectedHero = myHero;}
}


var HeroesItems: HeroClass[] = [
  {"id": 1, "name": "Her1"},
  {"id": 2, "name": "Her2"},
  {"id": 3, "name": "Her3"},
  {"id": 4, "name": "Her4"},
  {"id": 5, "name": "Her5"},
  {"id": 6, "name": "Her6"},
  {"id": 7, "name": "Her7"},
  {"id": 8, "name": "Her8"},
  {"id": 9, "name": "Her9"},
  {"id": 10, "name": "Her10"},
  {"id": 11, "name": "Her11"}

]
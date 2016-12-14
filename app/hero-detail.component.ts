import {Component, Input} from '@angular/core';
import {HeroClass} from './HeroClass';

@Component({
    selector: 'my-hero-detail',
    template: `
     <div *ngIf="hero1">
    <h2>{{hero1.name}}</h2>
    <div>Id: {{hero1.id}}</div>
    <div><input [(ngModel)]="hero1.name" placeholder="name" /></div>
  </div>
    `
})

export class HeroDetailComponent{
  @Input()
  public hero1: HeroClass;

}
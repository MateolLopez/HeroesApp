import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Heroe } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {

  term: string = '';
  heroes: Heroe[] = [];
  selectedHero: Heroe | undefined;

  constructor( private heroesService: HeroesService ) { }

  ngOnInit(): void {
  }

  searching(){
    this.heroesService.getSuggestions(this.term.trim())
      .subscribe(heroes => this.heroes = heroes)
  }

  optionSelected(event: MatAutocompleteSelectedEvent){

    if(!event.option.value){
      this.selectedHero = undefined;
      return;
    }

    const hero: Heroe = event.option.value;
    this.term = hero.superhero;

    this.heroesService.getHeroById(hero.id!)
      .subscribe(hero => this.selectedHero = hero)

  }
}

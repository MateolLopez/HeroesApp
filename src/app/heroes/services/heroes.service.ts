import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Heroe } from '../interfaces/heroe.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private baseUrl: string = environment.baseUrl;

  constructor( private http: HttpClient  ) { }

  getHeroes(): Observable<Heroe[]>{
    return this.http.get<Heroe[]>(`${this.baseUrl}/heroes`)
  }

  getHeroById(id: string): Observable<Heroe>{
    return this.http.get<Heroe>(`${this.baseUrl}/heroes/${id}`)
  }

  getSuggestions(term: string): Observable<Heroe[]>{
    return this.http.get<Heroe[]>(`${this.baseUrl}/heroes?q=${term}&_limit=5`)
  }

  addHero(hero: Heroe): Observable<Heroe>{
    return this.http.post<Heroe>(`${this.baseUrl}/heroes`, hero)
  }

  editHero(hero: Heroe): Observable<Heroe>{
    return this.http.put<Heroe>(`${this.baseUrl}/heroes/${hero.id}`, hero)
  }

  deleteHero(id:string):Observable<any>{
    return this.http.delete<any>(`${this.baseUrl}/heroes/${id}`)
  }
}

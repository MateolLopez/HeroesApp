import { NgModule } from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './pages/list/list.component';
import { AddComponent } from './pages/add/add.component';
import { SearchComponent } from './pages/search/search.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HeroeshomeComponent } from './pages/heroeshome/heroeshome.component';

const routes: Routes = [
  {
    path:'',
    component: HeroeshomeComponent,
    children: [
      {
        path:'list',
        component: ListComponent
      },
      {
        path:'add',
        component: AddComponent
      },
      {
        path:'edit/:id',
        component: AddComponent
      },
      {
        path:'search',
        component: SearchComponent
      },
      {
        path:':id',
        component: HeroeComponent
      },
      {
        path:'**',
        redirectTo:'list'
      }
    ]
  }
]



@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class HeroesRoutingModule { }

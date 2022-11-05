import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EpisodesRoutingModule } from './episodes-routing.module';
import { EpisodesComponent } from './components/episodes/episodes.component';
import { EpisodeComponent } from './components/episode/episode.component';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatPaginatorModule} from "@angular/material/paginator";


@NgModule({
  declarations: [
    EpisodesComponent,
    EpisodeComponent
  ],
    imports: [
        CommonModule,
        EpisodesRoutingModule,
        MatCardModule,
        MatButtonModule,
        MatPaginatorModule
    ]
})
export class EpisodesModule { }

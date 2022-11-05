import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EpisodesComponent} from "./components/episodes/episodes.component";
import {EpisodeResolver} from "./services/resolvers/episode.resolver";

const routes: Routes = [
  {path: '', component: EpisodesComponent, runGuardsAndResolvers:'paramsOrQueryParamsChange', resolve:{data:EpisodeResolver}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EpisodesRoutingModule { }

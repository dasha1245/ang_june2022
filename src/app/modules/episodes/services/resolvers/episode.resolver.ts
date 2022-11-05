import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {IEpisodes, IPaginatedData} from "../../interfaces";
import {EpisodeService} from "../episode.service";

@Injectable({
  providedIn: 'root'
})
export class EpisodeResolver implements Resolve<IPaginatedData<IEpisodes>> {

  constructor(private episodeService:EpisodeService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IPaginatedData<IEpisodes>> {
    const page = route.queryParams['page'];
    return this.episodeService.getALlEpisodes(page)
  }
}

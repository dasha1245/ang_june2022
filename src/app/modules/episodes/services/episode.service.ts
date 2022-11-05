import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {IEpisodes, IPaginatedData} from "../interfaces";
import {urls} from "../../../configs";

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {

  constructor(private httpClient:HttpClient) {

  }

  getALlEpisodes(page = 1):Observable<IPaginatedData<IEpisodes>>{
    return this.httpClient.get<IPaginatedData<IEpisodes>>(urls.episodes, {params:{page}})
  }
}

import {Component, Input, OnInit} from '@angular/core';
import { IEpisodes} from "../../interfaces";

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.css']
})
export class EpisodeComponent implements OnInit {

  @Input()
  episode: IEpisodes

  constructor() { }

  ngOnInit(): void {
  }

}

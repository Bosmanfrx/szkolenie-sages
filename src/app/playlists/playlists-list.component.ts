import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'stx-playlists-list',
  template: `
<ul class="list-group">
    <li
    *ngFor="let playlist of playlists; trackBy:$index"
    (activate)="select($event)"
    [playlist]="playlist"
    class="list-group-item stx-playlists-item" [class.active]="playlist.selected"></li>
</ul>
  `,
  styles: [`
`]
})
export class PlaylistsListComponent implements OnInit {

  playlists = [
    {
      name: 'Angular gretest Hits',
      color: '#ff0000',
      tracks: []
    },
    {
      name: 'The best of jQuery',
      color: '#00ff00',
      tracks: []
    }
  ];

  @Output('selected')
  selected = new EventEmitter()


  select = (e) => {
    e.selected = !e.selected;
    this.selected.emit(e);
  };

  constructor() {
  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'stx-playlists',
  template: `
<div class="row">
<div class="col">        <stx-card title="Playlists"><stx-playlists-list (selected)="sendToDetails($event)"></stx-playlists-list><footer>duuupa</footer></stx-card>
</div>
<div class="col"><stx-card title="Playlists"><stx-playlists-detail [playlist]="detailsPlaylist"></stx-playlists-detail></stx-card></div>
</div>
        

  `,
  styles: []
})
export class PlaylistsComponent implements OnInit {

  detailsPlaylist;

  sendToDetails = ($event) => {
    this.detailsPlaylist = $event
  };

  constructor() { }

  ngOnInit() {
  }

}

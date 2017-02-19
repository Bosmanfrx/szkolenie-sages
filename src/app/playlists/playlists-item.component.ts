import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: '.stx-playlists-item',
  template: `
    <p>
      {{playlist.name}}
      <button class="btn btn-xs" (click)="select()">Select</button>
    </p>
  `,
  styles: [],
})
export class PlaylistsItemComponent implements OnInit {

  @Input()
  playlist;

  @Output('activate')
  activation = new EventEmitter();

  select() {
    this.activation.emit(this.playlist)
  }

  constructor() { }

  ngOnInit() {
  }

}

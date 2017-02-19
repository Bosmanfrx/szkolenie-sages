import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'stx-playlists-detail',
  template: `
    <button (click)="edit = !edit">Show/Edit</button>
    <div [ngSwitch]="edit" *ngIf="playlist">
    <p *ngSwitchCase="true">
        <label [attr.for]="'name'">Name</label>
        <input [attr.id]="'name'" [(ngModel)]="playlist.name" type="text">
        <input type="checkbox" [(ngModel)]="playlist.favourite">
        <button>Save</button>
        <button>Cancel</button>
    </p>
    <p *ngSwitchDefault>
      {{ playlist.name }}
      {{ playlist.favourite }}
    </p>
    </div>
  `,
  styles: []
})
export class PlaylistsDetailComponent implements OnInit {

  edit = false;

  @Input('playlist') set makeCopy(playlist) {
    this.playlist = Object.assign({}, playlist)
  }
  playlist;

  constructor() {
  }

  ngOnInit() {
  }

}

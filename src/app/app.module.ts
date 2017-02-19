import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter.component';
import { PlaylistsComponent } from './playlists/playlists.component';
import { PlaylistsItemComponent } from './playlists/playlists-item.component';
import { PlaylistsListComponent } from './playlists/playlists-list.component';
import { PlaylistsDetailComponent } from './playlists/playlists-detail.component';
import { CardComponent } from './card.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    PlaylistsComponent,
    PlaylistsItemComponent,
    PlaylistsListComponent,
    PlaylistsDetailComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

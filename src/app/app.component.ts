import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>
      {{title}}
    </h1>
    <div class="container">
    <div class="row">
    <div class="col"><stx-playlists></stx-playlists>
</div>
</div>
</div>


`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor() {
  }
}

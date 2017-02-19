import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'stx-card',
  template: `
    <div class="card">
    <div class="card-block">
    <h4 class="card-title">
      {{title}}
    </h4>
    
      <ng-content></ng-content>
</div>
    </div>
  `,
  styles: []
})
export class CardComponent implements OnInit {

  @Input()
  title;

  constructor() {
  }

  ngOnInit() {
  }

}

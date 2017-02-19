import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'stx-counter',
  template: `
    <h3>{{ counter }}</h3>
  `,
  styles: []
})
export class CounterComponent implements OnInit {

  counter = 0;

  constructor() {
    setInterval(() => {
      this.counter++
    }, 500)}

  ngOnInit() {
  }

}

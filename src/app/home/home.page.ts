import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  counter:number = 0
  decrementDisabled:boolean = true;
  message:String = ''

  constructor() { }

  incrementPressed() {
    this.counter++
    this.decrementDisabled = false
  }

  decrementPressed() {
    if (this.counter > 0) {
      this.counter--
    }
    else{
      this.decrementDisabled = true
      alert('Number already 0')
      this.message='Counter already zero'
    }
  }

  resetPressed() {
    this.counter = 0
    this.decrementDisabled = true
    this.message=''
  }

}

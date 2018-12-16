import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-game',
  templateUrl: 'game.html'
})

export class GamePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  startGame() {
    // DOM variables
    let paragraph: HTMLElement = document.getElementById('paragraph');
    let wrapper: HTMLElement = document.querySelector('.wrapper');
    // variables
    let colors_array: string[] = ['red', 'green', 'blue', 'yellow', 'orange', 'purple', 'pink', 'brown'];
    let color_text_array: string[] = colors_array;

    paragraph.innerHTML = colors_array[Math.floor(Math.random() * colors_array.length + 1)];
    wrapper.style.backgroundColor = colors_array[Math.floor(Math.random() * colors_array.length + 1)];
  }
}

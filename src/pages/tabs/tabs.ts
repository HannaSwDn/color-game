import { Component } from '@angular/core';

import { HomePage } from '../home/home';

import { GamePage } from '../game/game'

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  homeTab = HomePage;
  gameTab = GamePage;

  constructor() {

  }
}

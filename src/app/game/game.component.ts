import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Game } from '../../models/game';
import { PlayerComponent } from '../player/player.component';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule, PlayerComponent],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss',
})
export class GameComponent implements OnInit {
  takeCardAnimation = false;
  currentCard: string | undefined = '';
  playedCard: string | undefined = '';
  game: Game = new Game();

  ngOnInit(): void {
    this.newGame();
  }

  newGame() {
    this.game = new Game();
    console.log(this.game);
  }

  takeCard() {
    if (!this.takeCardAnimation) {
      this.currentCard = this.game.stack.pop();
      console.log('New Card: ', this.currentCard);
      console.log('Game is ',  this.game);
      this.takeCardAnimation = true;
      setTimeout(() => {
        if(this.currentCard != undefined) {
          this.game.playedCards.push(this.currentCard);
        }
        this.takeCardAnimation = false;
      }, 1000);
    }
  }

  showPlayedCard() {
    this.playedCard = this.game.playedCards.pop();
  }
}

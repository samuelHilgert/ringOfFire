import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Game } from '../../models/game';
import { PlayerComponent } from '../player/player.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [
    CommonModule, 
    PlayerComponent, 
    MatButtonModule, 
    MatIconModule, 
    MatDialogModule, 
    MatFormFieldModule, 
    MatInputModule, 
    FormsModule,
    DialogAddPlayerComponent // DialogAddPlayerComponent hinzufügen
  ],
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'], // Korrigierte Schreibweise
})

export class GameComponent implements OnInit {
  readonly dialog = inject(MatDialog);

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
      console.log('Game is ', this.game);
      this.takeCardAnimation = true;
      setTimeout(() => {
        if (this.currentCard != undefined) {
          this.game.playedCards.push(this.currentCard);
        }
        this.takeCardAnimation = false;
      }, 1000);
    }
  }

  showPlayedCard() {
    this.playedCard = this.game.playedCards.pop();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddPlayerComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

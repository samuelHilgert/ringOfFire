import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-game-info',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './game-info.component.html',
  styleUrls: ['./game-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameInfoComponent implements OnInit, OnChanges {
  cardAction = [
    {
      title: 'Choose',
      description: 'You can choose a person to take a sip of their drink.',
    },
    { title: 'You', description: 'You have to drink a sip.' },
    {
      title: 'Last',
      description:
        'Touch the floor with your hand. The teammate who was last on the ground has to take a sip.',
    },
    {
      title: 'Hurry up',
      description:
        'Touch the tabletop with your thumb. The last player to touch the table has to take a sip.',
    },
    {
      title: 'Women power',
      description: 'The women of creation have to take a sip.',
    },
    {
      title: 'Heaven',
      description:
        'Point your index finger towards the sky. Whoever points to the sky last has to have a drink.',
    },
    {
      title: 'Poor guy',
      description:
        'Designate a teammate who from now on has to have a drink with you every time you are asked to.',
    },
    {
      title: 'Rhyme',
      description:
        'Pick a word. In a clockwise direction, the other players have to figure it out. Anyone who repeats a word or cannot find a new rhyme has to take a sip.',
    },
    { title: 'Men power', description: 'The men can toast and have a drink.' },
    {
      title: 'rule it',
      description:
        'The person who draws a jack is allowed to come up with a new rule that applies until the end of the game. The rule cannot override others.',
    },
    {
      title: 'Never have I ever...',
      description:
        "The player may call out 'Never have I ever ...' for one round. The losers drink.",
    },
    {
      title: 'Kingscup',
      description:
        'If a king is drawn, the player may pour a drink of his choice into the Kingscup. If the fourth king is drawn, the player must immediately empty the kingscup in the middle of the game.',
    },
    {
      title: 'Waterfall',
      description:
        'The ace stands for the waterfall. All players start to drink. In a clockwise direction, drinking may only be stopped when the person sitting next to you on the right has finished his waterfall. The player who draws the ace is allowed to stop drinking first (when he wants).',
    },
  ];

  title: string = '';
  description = '';
  @Input() card: string | undefined = '';

  constructor() {}

  ngOnInit(): void {}

  // void bedeutet im Übrigen, dass die methode nur etwas ausführt, aber nichts zurückgibt
  ngOnChanges(): void {
    if (this.card) {
      let cardNumber = +this.card.split('_')[1]; //Der !-Operator sagt TypeScript, dass this.card niemals undefined sein wird, sodass du ohne Fehler fortfahren kannst.
      this.title = this.cardAction[cardNumber - 1].title;
      this.description = this.cardAction[cardNumber - 1].description;
      console.log('current Card is: ', this.card);
      console.log('current Card Number is: ', cardNumber);
    }
  }
}

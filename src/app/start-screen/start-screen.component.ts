import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-screen',
  standalone: true,
  imports: [],
  templateUrl: './start-screen.component.html',
  styleUrl: './start-screen.component.scss'
})
export class StartScreenComponent {

  // statt mit router und funktion zu arbeiten, kann man auch im link einfach href und name der Seite verwenden, aber so funktioniert es um später externe Seiten zu verlinken
  constructor(private router: Router) { // constructor erstellen und den Router initialisieren, weil wir auf Seiten verlinken wollen // wir wollen ihn nur in der ts verwenden, deswegen private, ansonsten public wenn wir auch in html von der component nutzen wollen

  }
  newGame() {
    // start game
    this.router.navigateByUrl('/game');
  }
}

import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [CommonModule,GamesComponent],
  template: `
    <h3>Los juegos favoritos de {{ username }}</h3>
    <ul>
      @for (game of games; track game.id) {
        <li>{{ game.name }}</li>
      }
    </ ul>
  `,
  styles: ``
})
export class GamesComponent {
  username = '';
  games = [
    {
      id: 1,
      name: 'Uncharted 4'
    },
    {
      id: 2,
      name: 'bloodborne'
    },
    {
      id: 3,
      name: 'Elden Ring'
    }
  ]
}

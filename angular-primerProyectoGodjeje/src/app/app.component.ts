import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GamesComponent } from './games/games.component';
import { HeroesComponent } from './heroes/heroes.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GamesComponent, HeroesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Tour of Heroes';
  username = 'serhikalamar';
  isLogged = false;

  greet(){
    alert("hola buenas");
  }
}

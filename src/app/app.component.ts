import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AppBarComponent } from './components/app-bar/app-bar.component';
import { AvaliacaoComponent } from "./components/avaliacao/avaliacao.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, AppBarComponent, AvaliacaoComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MediaMeter';
}

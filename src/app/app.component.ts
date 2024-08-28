import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AppBarComponent } from './components/app-bar/app-bar.component';
import { AvaliacaoComponent } from "./components/avaliacao/avaliacao.component";
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { PerfilComponent } from './components/perfil/perfil.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, AppBarComponent, AvaliacaoComponent, CadastroComponent, PerfilComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MediaMeter';
}

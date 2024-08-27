import { provideRouter, withRouterConfig } from '@angular/router';
import { ApplicationConfig } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { AvaliacaoComponent } from './components/avaliacao/avaliacao.component';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'cadastro', component: CadastroComponent },
      { path: 'perfil', component: PerfilComponent },
      { path: 'avaliacao', component: AvaliacaoComponent },
    ], withRouterConfig({ onSameUrlNavigation: 'reload' }))
  ]
};

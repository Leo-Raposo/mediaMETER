import { provideRouter, Route } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { AvaliacaoComponent } from './components/avaliacao/avaliacao.component';
import { PerfilComponent } from './components/perfil/perfil.component';

const routes: Route[] = [
    { path: 'home', component: HomeComponent },
    { path: 'cadastro', component: CadastroComponent },
    { path: 'avaliacao', component: AvaliacaoComponent },
    { path: 'perfil', component: PerfilComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
];

export const appRoutes = provideRouter(routes);

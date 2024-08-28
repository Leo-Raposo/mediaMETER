import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { AvaliacaoComponent } from './components/avaliacao/avaliacao.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'midias', component: AvaliacaoComponent },
    { path: 'cadastro', component: CadastroComponent },
    { path: 'perfil', component: PerfilComponent },
];

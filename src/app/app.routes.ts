import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ConteudoComponent } from './pages/conteudo/conteudo.component';
import { HistoriaComponent } from './pages/historia/historia.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { ContatoComponent } from './pages/contato/contato.component';

export const routes: Routes = [
     { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'conteudo', component: ConteudoComponent },
  { path: 'historia', component: HistoriaComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'contato', component: ContatoComponent }

    
];

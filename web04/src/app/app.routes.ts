import { Routes } from '@angular/router';

import { Contato } from './contato/contato';
import { Pesquisa } from './pesquisa/pesquisa';
import { Cadastro } from './cadastro/cadastro';
import { Cesta } from './cesta/cesta';
import { Login } from './login/login';
import { ReenviarSenha } from './reenviar-senha/reenviar-senha';
import { Vitrine } from './vitrine/vitrine';

export const routes: Routes = [

  { path: '', redirectTo: 'contato', pathMatch: 'full' },

  { path: 'contato', component: Contato },
  { path: 'pesquisa', component: Pesquisa },
  { path: 'cadastro', component: Cadastro },
  { path: 'cesta', component: Cesta },
  { path: 'vitrine', component: Vitrine },
  { path: 'login', component: Login },
  { path: 'reenviar-senha', component: ReenviarSenha }

];
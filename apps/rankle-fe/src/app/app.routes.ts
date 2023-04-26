import { Route } from '@angular/router';
import { HomeComponent } from './home.component';
import { RankingsComponent } from './rankings.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'rankings',
    component: RankingsComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

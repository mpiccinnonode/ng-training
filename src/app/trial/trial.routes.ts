import { Routes } from '@angular/router';

export const TRIAL_ROUTES: Routes = [
  {
    path: '',
    children: [
      {
        path: 'humans',
        loadComponent: () =>
          import('./humans/humans.component').then((m) => m.HumansComponent),
      },
      {
        path: 'beasts',
        loadComponent: () =>
          import('./beasts/beasts.component').then((m) => m.BeastsComponent),
      },
    ],
  },
];

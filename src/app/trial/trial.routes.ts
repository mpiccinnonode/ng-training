import { Routes } from '@angular/router';

export const TRIAL_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./main/main.component').then((m) => m.MainComponent),
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

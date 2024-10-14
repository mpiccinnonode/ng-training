import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'trial',
    loadChildren: () =>
      import('./trial/trial.routes').then((m) => m.TRIAL_ROUTES),
  },
];

import { Routes } from '@angular/router';

// Route for content layout without navbar and footer etc... for pages like Login, Registration etc...
export const publicRoutes: Routes = [
  {
    path: '',
    loadChildren: () => import('../../auth/auth.module').then(m => m.AuthModule)
  }
];

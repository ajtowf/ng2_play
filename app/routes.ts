import { provideRouter, RouterConfig } from '@angular/router';

import { Todo } from './components/todo/todo';
import { About } from './components/about/about';
import { Profile } from './components/profile/profile';

import { AuthGuard} from './auth-guard';

export const appRoutes: RouterConfig = [
	{ path: '', component: Todo },
	{ path: 'about/:id', component: About },
  { path: 'profile', component: Profile, canActivate:[AuthGuard]}
];

export const APP_ROUTER_PROVIDER = provideRouter(appRoutes);
import { provideRouter, RouterConfig } from '@angular/router';

import { Todo } from './todo';
import { About } from './about';
import { Profile } from './profile';

import { AuthGuard} from './';

export const appRoutes: RouterConfig = [
	{ path: '', component: Todo },
	{ path: 'about/:id', component: About },
  { path: 'profile', component: Profile, canActivate:[AuthGuard]}
];

export const APP_ROUTER_PROVIDER = provideRouter(appRoutes);
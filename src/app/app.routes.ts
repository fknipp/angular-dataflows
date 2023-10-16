import { Routes } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { HomeComponent } from './home/home.component';
import { FunctionComponent } from './function/function.component';
import { SignalComponent } from './signal/signal.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home'
  },
  {
    path: 'events',
    component: EventsComponent,
    title: 'Events'
  },
  {
    path: 'function',
    component: FunctionComponent,
    title: 'Function'
  },
  {
    path: 'signal',
    component: SignalComponent,
    title: 'Signal'
  }
];

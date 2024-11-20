import { Routes } from '@angular/router';
import { CustomHelloWorldComponent } from './custom-hello-world/custom-hello-world.component';

export const routes: Routes = [
  {
    path: '/hello-world',
    component: CustomHelloWorldComponent,
  },
];

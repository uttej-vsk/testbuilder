import { Component, input } from '@angular/core';
import { type RegisteredComponent } from '@builder.io/sdk-angular';

@Component({
  selector: 'app-custom-hello-world',
  standalone: true,
  template: `<h1>{{ title }}</h1>`,
})
export class CustomHelloWorldComponent {
  title!: string;
}

export const customComponentInfo: RegisteredComponent = {
  component: CustomHelloWorldComponent,
  canHaveChildren: true,
  name: 'HelloWorld',
  inputs: [],
  defaultChildren: [
    {
      '@type': '@builder.io/sdk:Element',
      component: {
        name: 'Text',
        options: {
          text: 'Hello world',
        },
      },
    },
  ],
};

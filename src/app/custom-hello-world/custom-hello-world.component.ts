import { Component, Input, input } from '@angular/core';
import { type RegisteredComponent } from '@builder.io/sdk-angular';

@Component({
  selector: 'app-custom-hello-world',
  standalone: true,
  template: `<h1>{{ title }}</h1>`,
})
export class CustomHelloWorldComponent {
  @Input() title!: string;
}

export const customComponentInfo: RegisteredComponent = {
  component: CustomHelloWorldComponent,
  name: 'HelloWorld',
  inputs: [
    {
      name: 'title',
      type: 'string',
      defaultValue: 'Hello world',
    },
  ],
};

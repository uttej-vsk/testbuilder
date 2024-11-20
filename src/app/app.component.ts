import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { customComponentInfo } from './custom-hello-world/custom-hello-world.component';
import {
  BuilderContent,
  Content,
  fetchOneEntry,
} from '@builder.io/sdk-angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Content, RouterOutlet],
  template: `
    <builder-content
      [model]="model"
      [apiKey]="apiKey"
      [customComponents]="customComponents"
    />
    <router-outlet />
  `,
})
export class AppComponent {
  notFound = false;
  customComponents = [customComponentInfo];
  content: BuilderContent | null = null;
  model = 'hello-world';
  apiKey = '74eefffba4a442fe8737f96a03df502a';

  async ngOnInit() {
    this.content = await fetchOneEntry({
      model: this.model,
      apiKey: this.apiKey,
      userAttributes: {
        urlPath: window.location.pathname,
      },
    });

    if (!this.content) {
      this.notFound = true;
    }
  }
}

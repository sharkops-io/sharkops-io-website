import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-external-link',
  template: `
    <a [href]="url" target="_blank">{{ display }}<clr-icon shape="link"></clr-icon></a>
  `
})
export class ExternalLinkComponent {
  @Input()
  url: string;

  @Input()
  display: string;
}

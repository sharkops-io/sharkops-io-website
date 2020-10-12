import { Component } from '@angular/core';
import { Link } from '../common/model/link';

@Component({
  template: `
    <h1>SharkOps</h1>
    <p>
      In the future, <em>SharkOps</em> will be home to DevOps knowledge including Open Source projects and Articles as they relate to
      everything DevOps. Topics will include: Pipelines, Containers, Kubernetes, App Development, etc.
    </p>
    <h2>Community</h2>
    <p>
      At SharkOps we pride ourselves on being completely open, accessible, and inclusive to anyone who wishes to help, share knowledge, and mentor others.
    </p>
    <p>Please join us here, at sharkops.io, and at our communities:</p>
    <br />
    <ul *ngFor="let community of communities">
      <li>
        <app-external-link [url]="community.url" [display]="community.display"></app-external-link>
      </li>
    </ul>
  `
})
export class HomeComponent {
  communities: Link[] = [
    { display: 'Slack', url: 'https://shark-ops.slack.com' },
    { display: 'GitLab', url: 'https://gitlab.com/sharkops' },
    { display: 'GitHub', url: 'https://github.com/Shark-Ops' }
  ];
}

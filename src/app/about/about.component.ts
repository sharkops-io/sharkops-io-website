import { Component } from '@angular/core';
import { Link } from '../common/model/link';

@Component({
  template: `
    <h1>About SharkOps</h1>
    <p>SharkOps was founded in 2020 with the intent to share information with others.</p>
    <h2>Members</h2>
    <div class="clr-row">
      <div class="clr-col-lg-6 clr-col-12" *ngFor="let member of members">
        <div class="card">
          <div class="card-block">
            <h3 class="card-title">{{ member.name }}</h3>
            <p class="card-text">{{ member.description }}</p>
          </div>
          <div class="card-footer">
            <ng-container *ngFor="let link of member.links">
              <a class="btn btn-sm btn-link" [href]="link.url" target="_blank">{{ link.display }}<clr-icon shape="link"></clr-icon></a>
            </ng-container>
          </div>
        </div>
      </div>
    </div>
  `
})
export class AboutComponent {
  members: Member[] = [
    {
      name: 'Andrew (Shark) Landsverk',
      description: `Shark has been a professional software developer and system administrator for over 10 years.
                    Currently, Shark works as a Senior Software Engineer doing everything from full stack application development
                    to infrastructure automation using Ansible.`,
      links: [
        { display: 'GitLab', url: 'https://gitlab.com/sharkops' },
        { display: 'GitHub', url: 'https://github.com/Quantas' },
        { display: 'LinkedIn', url: 'https://www.linkedin.com/in/andrew-landsverk/' }
      ]
    },
    {
      name: 'You?',
      description: 'If you would like to become a part of SharkOps, please contact Shark at LinkedIn below.',
      links: [
        { display: 'LinkedIn', url: 'https://www.linkedin.com/in/andrew-landsverk/' }
      ]
    }
  ];
}

export interface Member {
  name: string;
  description: string;
  links?: Link[];
}

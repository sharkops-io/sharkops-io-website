import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <clr-main-container>
      <clr-header class="header-7">
        <div class="branding">
          <a routerLink="/" class="nav-link">
            <img class="clr-icon" src="assets/shark.png" />
            <span class="title">SharkOps</span>
          </a>
        </div>
        <div class="header-nav" [clr-nav-level]="1">
          <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }" class="nav-link"><span class="nav-text">Home</span></a>
          <a routerLink="/about" routerLinkActive="active" class="nav-link"><span class="nav-text">About</span></a>
        </div>
      </clr-header>
      <div class="content-container">
          <div class="content-area">
            <router-outlet></router-outlet>
            <div class="footer">
              &copy;2020 SharkOps
            </div>
          </div>
      </div>
    </clr-main-container>
  `,
  styles: [
    `
      .footer {
        margin-top: 1rem;
      }
    `
  ]
})
export class AppComponent {}

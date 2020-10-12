import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
      { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
      { path: '**', redirectTo: '' }
      // useHash=true due to GitLab Pages: https://gitlab.com/gitlab-org/gitlab/-/issues/1240
    ], { useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

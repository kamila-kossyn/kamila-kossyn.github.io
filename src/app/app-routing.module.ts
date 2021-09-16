import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './page/welcome/welcome.component';

const routes: Routes = [

  {path: '',component: WelcomeComponent},
  {path: 'welcome',component: WelcomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {
      initialNavigation: "enabled",
      useHash: true,
      onSameUrlNavigation: 'reload',
    }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }

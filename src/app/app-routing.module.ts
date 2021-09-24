import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FiveOClockCavesComponent } from './page/five-oclock-caves/five-oclock-caves.component';
import { WelcomeComponent } from './page/welcome/welcome.component';

const routes: Routes = [

  {path: '',component: WelcomeComponent, data: {animation: 'Home'}},
  {path: 'welcome',component: WelcomeComponent, data: {animation: 'Home'}},
  {path: 'five-o-clock-caves', component: FiveOClockCavesComponent, data: {animation: 'Page'}}
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




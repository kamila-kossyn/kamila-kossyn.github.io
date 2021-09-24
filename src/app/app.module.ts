import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './page/welcome/welcome.component';
import { AboutMeComponent } from './component/about-me/about-me.component';
import { MarkdownModule } from 'ngx-markdown';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SecurityContext } from '@angular/core';
import { PortfolioComponent } from './component/portfolio/portfolio.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { ScrollToDirective } from './directive/scroll-to.directive';
import { FullscreenContenContainerComponent } from './component/fullscreen-conten-container/fullscreen-conten-container.component';
import { FiveOClockCavesComponent } from './page/five-oclock-caves/five-oclock-caves.component';
import { ImageComponent } from './component/image/image.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    AboutMeComponent,
    PortfolioComponent,
    NavBarComponent,
    ScrollToDirective,
    FullscreenContenContainerComponent,
    FiveOClockCavesComponent,
    ImageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MarkdownModule.forRoot({
      sanitize: SecurityContext.NONE
    }),
    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

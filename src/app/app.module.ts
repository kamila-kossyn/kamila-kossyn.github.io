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
@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    AboutMeComponent,
    PortfolioComponent,
    NavBarComponent,
    ScrollToDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MarkdownModule.forRoot({
      sanitize: SecurityContext.NONE
    }),
    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClient })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

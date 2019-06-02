/*
Imports
*/
  // Angular
  import { BrowserModule } from '@angular/platform-browser';
  import { NgModule } from '@angular/core';
  import { RouterModule } from '@angular/router';
  import { HttpClientModule } from '@angular/common/http';
  
  // Inner components
  import { AuthService} from "./services/auth/auth-service.service";
  import { RequesterService } from './services/requester/requester.service';
  import { AppComponent } from './app.component';
  import { MainRouter } from './app.router';

  // Inner modules
  import { HeaderModule } from "./components/header/module";
//


/* 
Definition
*/
  @NgModule({
    declarations: [
      AppComponent
    ],
    imports: [
      BrowserModule,
      RouterModule.forRoot( MainRouter, { onSameUrlNavigation: 'reload' } ),
      HttpClientModule,
      HeaderModule
    ],
    providers: [ AuthService, RequesterService ],
    bootstrap: [ AppComponent ]
  })
//

/* 
Export
*/
  export class AppModule { }
//

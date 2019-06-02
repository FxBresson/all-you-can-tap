/* 
Imports & definition 
*/
  // Imports
  import { Component, OnInit } from '@angular/core';

  // Inner
  import { IdentityModel } from '../../models/identity.model';
  import { ApiResponseModel } from "../../models/api.reponse.model";
  import { AuthService } from "../../services/auth/auth-service.service";
  import { Router } from '@angular/router';

  // Definition
  @Component({
    selector: 'app-user-page',
    templateUrl: './score-page.component.html',
    styleUrls: ['./score-page.component.scss'],
    providers: [ AuthService ]
  })
//


/* 
Export
*/
  export class ScorePageComponent implements OnInit {

    


    /* 
    Config.
    */
      // Module injection
      constructor(
        private AuthService: AuthService,
        private router: Router
      ) {};
    //


    /*
    Methods
    */
    //
    


    /* 
    Hooks
    */
      ngOnInit() { 
        this.AuthService.getUserId().then( console.log )
      };
    //
  }
//
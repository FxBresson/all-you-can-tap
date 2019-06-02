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
  import { RequesterService } from '../../services/requester/requester.service';

  // Definition
  @Component({
    selector: 'app-user-page',
    templateUrl: './user-page.component.html',
    styleUrls: ['./user-page.component.scss'],
    providers: [ AuthService, RequesterService ]
  })
//

/* 
Export
*/
  export class UserPageComponent implements OnInit {

    public score: number = 0;
    private gameRunning: boolean = false;
    public progress: number = 0;
    private interval: NodeJS.Timer = null;
    private precision: number = 10;
    private gameDuration: number = 10;

    /* 
    Config.
    */
      // Module injection
      constructor(
        private AuthService: AuthService,
        private router: Router,
        private requester: RequesterService
      ) {};
    //

    /*
    Methods
    */
    //
    public tap() {
      this.score++;

      if(!this.gameRunning) {
        this.startGame()
      }
    }

    private startGame() {
      this.gameRunning = true;
      this.interval = setInterval(() => {
        this.progress += (100/this.gameDuration)/this.precision
        if (this.progress >= 100 && this.gameRunning) {
          this.stopGame()
        }
      }, (1000/this.precision))
    }

    private stopGame() {
      this.gameRunning = false;
      clearInterval(this.interval)
      this.interval = null;
      this.progress = 0;

      this.requester.post('/game', {
        score: this.score
      }).then(apiResponse => {
        this.router.navigate(['tap'])
      }).catch(alert)
    }


    /* 
    Hooks
    */
      ngOnInit() { 
      };
    //
  }
//
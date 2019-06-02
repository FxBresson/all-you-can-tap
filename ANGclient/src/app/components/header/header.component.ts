import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [],
  providers: [ AuthService ]
})
export class HeaderComponent implements OnInit {

  public user: {} = null;

  constructor(
    private AuthService: AuthService,
    public router: Router
  ) { }

  ngOnInit() {
    this.AuthService.getUserId().then((apiResponse) => {
      this.user = apiResponse.data;
    }).catch(console.log)
  }

  logout() {
    this.AuthService.logout()
  }

}

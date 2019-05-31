import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [],
  providers: [ AuthService ]
})
export class HeaderComponent implements OnInit {

  constructor(
    private AuthService: AuthService
  ) { }

  ngOnInit() {
  }

  logout() {
    this.AuthService.logout()
  }

}

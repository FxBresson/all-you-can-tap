import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth-service.service';
import { Router } from '@angular/router';
import { UserStoreService } from 'src/app/services/stores/user.store.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [],
  providers: [ AuthService ]
})
export class HeaderComponent implements OnInit {

  constructor(
    private AuthService: AuthService,
    public router: Router,
    public UserStore: UserStoreService
  ) { }

  ngOnInit() {
   
  }

  logout() {
    this.AuthService.logout()
  }

}

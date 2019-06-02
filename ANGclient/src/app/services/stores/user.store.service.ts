/* 
Imports 
*/
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IdentityModel } from '../../models/identity.model';
import { RequesterService } from '../requester/requester.service';

//

/* 
Definition 
*/
@Injectable({
  providedIn: 'root'
})
export class UserStoreService {

  constructor(
    private Requester: RequesterService
  ){
   
  };

  private readonly _user = new BehaviorSubject<IdentityModel>(null);

  readonly user$: Observable<IdentityModel> = this._user.asObservable();

  public get user(): IdentityModel {
    return this._user.getValue();
  }

  public set user(val: IdentityModel) {
    this._user.next(val);
  }

  login(user: IdentityModel) {
    this.user = user
  }

  logout() {
    this.user = null;
  }
};
//
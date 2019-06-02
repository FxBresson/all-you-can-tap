/* 
Imports 
*/
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from "../../../environments/environment";
//

/* 
Definition 
*/
@Injectable({
  providedIn: 'root'
})
export class RequesterService {

  // Inject module(s) in the service
  constructor( private HttpClient: HttpClient ){};

  // Function to register a user
  public get(route: String): Promise<any>{
    // Set header
    let myHeader = new HttpHeaders();
    myHeader.append('Content-Type', 'application/json');

    return this.HttpClient.get(`${environment.apiUrl}${route}`, { headers: myHeader })
    .toPromise().then(this.getData).catch(this.handleError);
  };

  public post(route: String, options:Object) {
    // Set header
    let myHeader = new HttpHeaders();
    myHeader.append('Content-Type', 'application/json');

    return this.HttpClient.post(`${environment.apiUrl}${route}`, options, { headers: myHeader })
    .toPromise().then(this.getData).catch(this.handleError);
  }

  public patch(route: String, id: number, options:Object) {
    // Set header
    let myHeader = new HttpHeaders();
    myHeader.append('Content-Type', 'application/json');

    return this.HttpClient.patch(`${environment.apiUrl}${route}/${id}`, options, { headers: myHeader })
    .toPromise().then(this.getData).catch(this.handleError);
  }

  // Get the API response
  private getData(res: any){
    return res || {};
  };

  // Get the API error
  private handleError(err: any){
    return Promise.reject(err.error);
  };
};
//
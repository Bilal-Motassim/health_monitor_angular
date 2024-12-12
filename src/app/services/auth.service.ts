import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {jwtDecode} from 'jwt-decode';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAnthenticated: boolean = false;
  roles : any;
  email: any;
  accessToken! : string;
  private apiUrl = 'http://localhost:8080/api/auth';


  constructor(private  http: HttpClient) { }


  public login(email: string, password: string) {
      let options = {
        headers : new HttpHeaders().set('Content-Type', 'application/json'),
      }
      let params = new HttpParams().set('email', email).set('password', password);
      return this.http.post("http://localhost:8080/auth/login", params,options);
  }

  loadProfile(data: any) {
      this.isAnthenticated = true;
      this.accessToken = data['access_token'];
      let decodedJwt = jwtDecode(this.accessToken);
      window.localStorage.setItem('jwt-token', this.accessToken);



  }
  public register(firstName: string, lastName: string, email: string, password: string) {
    // let options = {
    //   headers : new HttpHeaders().set('Content-Type', 'application/json'),
    // }


    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    const payload = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password
    };



    //let params = new HttpParams().set('firstName', firstName).set('lastName', lastName).set('email', email).set('password', password);
    console.log("params : " + payload)
    console.log(headers);
    return this.http.post("http://localhost:8080/api/auth/register", payload,{headers});

  }

}

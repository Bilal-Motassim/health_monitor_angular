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
    const body = {
      email: email,
      password: password
    };

    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.post("http://localhost:8080/api/auth/login", body, options);
  }



  loadProfile(data: any) {
    this.isAnthenticated = true;
    this.accessToken = data['authToken']; // Récupération correcte du token JWT
    if (!this.accessToken || typeof this.accessToken !== 'string') {
      throw new Error("Invalid token received from the server.");
    }

    // Décodage du token JWT
    const decodedJwt = jwtDecode(this.accessToken);

    // Stocker le token dans le localStorage
    window.localStorage.setItem('jwt-token', this.accessToken);

    console.log("Decoded JWT:", decodedJwt);
  }

  public register(firstName: string, lastName: string, email: string, password: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    const payload = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password
    };

    console.log("Payload:", payload);

    // Utilisation de l'URL correcte
    return this.http.post("http://localhost:8080/api/auth/register2", payload, { headers });
  }


  updatePersonalData(data: {
    email: string;
    firstname: string;
    lastname: string;
    password: string;
  }): Observable<any> {
    return this.http.put(`${this.apiUrl}/user/personal-data`, data);
  }

  updateProfile(data: {
    height: number;
    age: number;
    activity: string;
  }): Observable<any> {
    return this.http.put(`${this.apiUrl}/user/profile`, data);
  }

}

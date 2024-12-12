import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent implements OnInit{

  path: string = "assets/images/signin.jpg";
  alttext: string = "first image";


  formLogin! : FormGroup;
  constructor(private formeBuilder: FormBuilder, private router : Router, private authService: AuthService) {

  }
  ngOnInit(): void {
      this.formLogin = this.formeBuilder.group({
        email: this.formeBuilder.control(""),
        password: this.formeBuilder.control("")

      })
  }

  handleLogin() {
    let email = this.formLogin.value.email;
    let password = this.formLogin.value.password;
    this.authService.login(email, password).subscribe({
      next : data => {
          this.authService.loadProfile(data);
      },
      error: error => {
        console.log(error);
      }
    })
  }
}

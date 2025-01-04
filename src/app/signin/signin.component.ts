import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  path: string = "assets/images/signin.jpg";
  logoAppPath = "assets/images/logoApp.png";
  alttext: string = "first image";

  formLogin!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService, private appComponent: AppComponent) {}

  ngOnInit(): void {
    this.formLogin = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  get f() {
    return this.formLogin.controls;
  }

  handleLogin(): void {
    if (this.formLogin.valid) {
      console.log('Login form data:', this.formLogin.value);

      const email = this.formLogin.value.email;
      const password = this.formLogin.value.password;

      this.authService.login(email, password).subscribe({
        next: (data) => {
          console.log('Login successful:', data);
          this.appComponent.isSignedIn = true;
          this.authService.loadProfile(data);
        },
        error: (error) => {
          console.error('Login failed:', error);
        },
      });
    } else {
      console.error('Form is invalid!');
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit{
  path: string = "assets/images/signin.jpg";
  alttext: string = "first image";
  formSignUp!: FormGroup;
  errorMessage: string | null = null;

  constructor(private formeBuilder: FormBuilder, private router : Router, private authService: AuthService){

  }
  ngOnInit(): void {
    this.formSignUp = this.formeBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });
  }


  handleSignup(): void {

    if (this.formSignUp.invalid) {
      this.errorMessage = "Please fill out the form correctly.";
      return;
    }

    // const { firstName, lastName, email, password, confirmPassword } = this.formSignUp.value;
    let email = this.formSignUp.value.email;
    let password = this.formSignUp.value.password;
    let firstName = this.formSignUp.value.firstName;
    let lastName = this.formSignUp.value.lastName;
    let confirmPassword = this.formSignUp.value.confirmPassword;
    if (password !== confirmPassword) {
      alert('Please !!!!!!');
      this.errorMessage = "Passwords do not match.";
      return;
    }

    this.authService.register(firstName, lastName, email, password).subscribe({
      next: (response) => {
        console.log('User registered successfully:', response);
        this.router.navigate(['/signin']); // Redirection après succès
      },
      error: (err) => {
        console.error('Registration failed:', err);
        this.errorMessage = 'Failed to register. Please try again.';
      }
    });
  }
}

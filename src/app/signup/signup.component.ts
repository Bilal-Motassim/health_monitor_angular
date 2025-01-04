import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  @Output() signUpSuccess = new EventEmitter<void>();

  path: string = "assets/images/signin.jpg";
  alttext: string = "Sign up image";
  formSignUp!: FormGroup;
  errorMessage: string | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.formSignUp = this.formBuilder.group(
      {
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required],
      },
      { validators: this.passwordMatchValidator }
    );
  }

  // Custom Validator for Password Matching
  private passwordMatchValidator(group: AbstractControl): ValidationErrors | null {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { passwordMismatch: true };
  }

  handleSignup(): void {
    if (this.formSignUp.invalid) {
      this.errorMessage = "Please fill out the form correctly.";
      return;
    }

    const { firstName, lastName, email, password } = this.formSignUp.value;

    this.authService.register(firstName, lastName, email, password).subscribe({
      next: (response) => {
        console.log('User registered successfully:', response);
        this.errorMessage = null;
        this.signUpSuccess.emit();
        this.router.navigate(['/details']);
      },
      error: (err) => {
        console.error('Registration failed:', err);
        this.errorMessage = 'Failed to register. Please try again.';
      }
    });
  }

  // Utility method for easier access to form controls in the template
  get formControls() {
    return this.formSignUp.controls;
  }
}

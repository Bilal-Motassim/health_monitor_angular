import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isSignedIn = false; // Track login state

  constructor(private router: Router) {}

  toggleSignUp() {
    this.isSignedIn = !this.isSignedIn;
  }

  onSignOut() {
    this.isSignedIn = false; // Set isSignedIn to false when signing out
    this.router.navigate(['/signin']);  // Navigate to the SignIn page
  }
}

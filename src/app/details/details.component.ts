import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit{
  path: string = "assets/images/signin.jpg";
  logoAppPath =   "assets/images/logoApp.png"
  alttext: string = "first image";
  userForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      height: ['', [Validators.required, Validators.min(1)]],
      date: ['', Validators.required],
      age: ['', Validators.required],
      weight: ['', Validators.required],
      gender: ['', Validators.required],
      gool: ['', Validators.required]
    });
  }

  get f() {
    return this.userForm.controls;
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      console.log('Form data:', this.userForm.value);
    } else {
      console.error('Form is invalid!');
    }
  }
}

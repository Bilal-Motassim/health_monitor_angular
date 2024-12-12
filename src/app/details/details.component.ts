import { Component } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  path: string = "assets/images/signin.jpg";
  logoAppPath =   "assets/images/logoApp.png"
  alttext: string = "first image";

}

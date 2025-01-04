import { Component } from '@angular/core';

@Component({
  selector: 'app-scan-meals',
  templateUrl: './scan-meals.component.html',
  styleUrl: './scan-meals.component.css'
})
export class ScanMealsComponent {
  imageUrl: string | ArrayBuffer | null = null;

  onImageSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        this.imageUrl = reader.result;
      };

      reader.readAsDataURL(file);
    }
  }

  scanMeal(): void {
    alert('Scanning your meal...');
  }
}

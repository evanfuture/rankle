import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'rankle-home',
  templateUrl: './home.component.html',
  imports: [CommonModule],
})
export class HomeComponent {
  constructor(private router: Router) {}

  onGoButtonClick(): void {
    this.router.navigate(['rankings']);
  }
}

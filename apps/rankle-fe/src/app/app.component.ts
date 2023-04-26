import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ApiClientService } from '@rankle/frontend/utils/api-client';

@Component({
  standalone: true,
  imports: [RouterModule, CommonModule],
  providers: [ApiClientService],
  selector: 'rankle-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent {}

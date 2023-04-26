import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ApiClientService } from '@rankle/frontend/utils/api-client';
import { BehaviorSubject } from 'rxjs';

@Component({
  standalone: true,
  imports: [RouterModule, CommonModule],
  providers: [ApiClientService],
  selector: 'rankle-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  helloRes$ = new BehaviorSubject('');

  constructor(private apiClientService: ApiClientService) {}

  async fetchData(): Promise<void> {
    const res = await this.apiClientService.apiClient.hello.query();
    this.helloRes$.next(res);
  }

  ngOnInit(): void {
    this.fetchData();
  }
}

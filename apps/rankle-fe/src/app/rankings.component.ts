import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiClientService } from '@rankle/frontend/utils/api-client';
import { ImageMetadata } from '@rankle/shared/data-models';
import { BehaviorSubject } from 'rxjs';

@Component({
  standalone: true,
  selector: 'rankle-rankings',
  templateUrl: './rankings.component.html',
  imports: [CommonModule],
  providers: [ApiClientService],
})
export class RankingsComponent implements OnInit {
  randomPair$ = new BehaviorSubject<ImageMetadata[]>([]);

  constructor(private apiClientService: ApiClientService, private route: ActivatedRoute) {}

  async fetchNextPair(): Promise<void> {
    this.randomPair$.next([]);
    const res = await this.apiClientService.apiClient.randomPair.query();
    if (res.data) {
      this.randomPair$.next(res.data);
    }
  }

  ngOnInit(): void {
    this.fetchNextPair();
  }

  async onSelect(pair: ImageMetadata[], selectedId: string) {
    await this.apiClientService.apiClient.rankPair.mutate({
      imageA: pair[0].id,
      imageB: pair[1].id,
      winner: pair[0].id === selectedId ? 'A' : 'B',
    });

    this.fetchNextPair();
  }
}

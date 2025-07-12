import { ImageRank } from '@rankle/shared/data-models';
import { RankingRepository } from '../domain/interfaces';

const data: ImageRank[] = [
  { id: 'A', elo_rating: 1000, capture_time: '' },
  { id: 'B', elo_rating: 1000, capture_time: '' },
  { id: 'C', elo_rating: 1000, capture_time: '' },
];

export class MemoryRankingRepository implements RankingRepository {
  private rankings = [...data];

  async listRankings(): Promise<ImageRank[]> {
    return this.rankings;
  }

  async updateRanking(id: string, rating: number): Promise<void> {
    const idx = this.rankings.findIndex(r => r.id === id);
    if (idx !== -1) {
      this.rankings[idx] = { ...this.rankings[idx], elo_rating: rating };
    }
  }
}

import { calculateElo } from './elo';
import { RankingRepository, EventBus } from './interfaces';

export class RankingService {
  constructor(private repo: RankingRepository, private bus: EventBus) {}

  async rankPair(idA: string, idB: string, winner: 'A' | 'B'): Promise<void> {
    const rankings = await this.repo.listRankings();
    const a = rankings.find(r => r.id === idA);
    const b = rankings.find(r => r.id === idB);
    if (!a || !b) {
      throw new Error('missing image');
    }
    const [newA, newB] = calculateElo(a.elo_rating, b.elo_rating, winner);
    await this.repo.updateRanking(idA, newA);
    await this.repo.updateRanking(idB, newB);
    await this.bus.publish({ type: 'ranking.updated', payload: { idA, idB, newA, newB } });
  }

  async getRandomPair() {
    const all = await this.repo.listRankings();
    return all.slice(0, 2);
  }
}

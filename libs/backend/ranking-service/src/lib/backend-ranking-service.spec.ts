import { RankingService } from './domain/ranking-service';
import { MemoryRankingRepository } from './infrastructure/memory-repository';
import { InMemoryEventBus } from './infrastructure/event-bus';

describe('RankingService', () => {
  it('updates elo ratings', async () => {
    const repo = new MemoryRankingRepository();
    const service = new RankingService(repo, new InMemoryEventBus());
    await service.rankPair('A', 'B', 'A');
    const ranks = await repo.listRankings();
    const a = ranks.find(r => r.id === 'A')!;
    expect(a.elo_rating).not.toBe(1000);
  });
});

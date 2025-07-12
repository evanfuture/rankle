import { z } from 'zod';
import { t } from '@rankle/backend/rankle-core';
import { RankingService } from './domain/ranking-service';
import { MemoryRankingRepository } from './infrastructure/memory-repository';
import { InMemoryEventBus } from './infrastructure/event-bus';

const service = new RankingService(new MemoryRankingRepository(), new InMemoryEventBus());

export const rankingRouter = t.router({
  randomPair: t.procedure.query(async () => {
    const pair = await service.getRandomPair();
    return { data: pair };
  }),
  rankPair: t.procedure
    .input(z.object({ idA: z.string(), idB: z.string(), winner: z.enum(['A', 'B']) }))
    .mutation(async ({ input }) => {
      await service.rankPair(input.idA, input.idB, input.winner);
      return { success: true };
    }),
});

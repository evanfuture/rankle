import { ImageRank } from '@rankle/shared/data-models';

export interface RankingRepository {
  listRankings(): Promise<ImageRank[]>;
  updateRanking(id: string, rating: number): Promise<void>;
}

export interface EventBus {
  publish(event: { type: string; payload: unknown }): Promise<void>;
}

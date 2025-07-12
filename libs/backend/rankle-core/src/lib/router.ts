import { t } from './context';
import { rankingRouter } from '@rankle/backend/ranking-service';

export const appRouter = t.router({
  hello: t.procedure.query(async ({ ctx }): Promise<string> => {
    return `Hello! testHeader: ${ctx.test}`;
  }),
  ranking: rankingRouter,
});

export type AppRouter = typeof appRouter;

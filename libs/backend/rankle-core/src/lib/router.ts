import { t } from './context';

// type RandomResponse = {
//   data: ImageMetadata[];
//   error: any | null;
// };
// type RankPairResponse = {
//   success: boolean;
//   error: any | null;
// };

export const appRouter = t.router({
  hello: t.procedure.query(async ({ ctx }): Promise<string> => {
    // console.log({ ctxTest: ctx.test });
    return `Hello! testHeader: ${ctx.test}`;
  }),
  // randomPair: t.procedure.query(async (): Promise<RandomResponse> => {
  //   return {
  //     data: IMAGES,
  //     error: null,
  //   };
  // }),
  // rankPair: t.procedure
  //   .input(z.object({ imageA: z.string(), imageB: z.string(), winner: z.enum(['A', 'B']) }))
  //   .mutation(async ({ input }): Promise<RankPairResponse> => {
  //     const imageAIndex = RANKINGS.findIndex(i => i.id === input.imageA);
  //     const imageBIndex = RANKINGS.findIndex(i => i.id === input.imageB);
  //     if (imageAIndex === -1 || imageBIndex === -1) {
  //       return { success: false, error: 'missing Image' };
  //     }

  //     const [newRatingA, newRatingB] = calculateElo(
  //       RANKINGS[imageAIndex].elo_rating,
  //       RANKINGS[imageBIndex].elo_rating,
  //       input.winner,
  //     );

  //     RANKINGS[imageAIndex] = { ...RANKINGS[imageAIndex], elo_rating: newRatingA };
  //     RANKINGS[imageBIndex] = { ...RANKINGS[imageBIndex], elo_rating: newRatingB };

  //     console.log(RANKINGS);

  //     return { success: true, error: null };
  //   }),
});

export type AppRouter = typeof appRouter;

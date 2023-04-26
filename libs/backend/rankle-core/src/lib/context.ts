import { inferAsyncReturnType, initTRPC } from '@trpc/server';
import { CreateExpressContextOptions } from '@trpc/server/adapters/express';
import superjson from 'superjson';

export function createContext(event: CreateExpressContextOptions) {
  return {
    test: event.req.headers['test'] || '(empty)',
  };
}
export type Context = inferAsyncReturnType<typeof createContext>;

export const t = initTRPC.context<Context>().create({
  transformer: superjson,
});

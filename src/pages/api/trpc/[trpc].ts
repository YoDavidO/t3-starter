import superjson from 'superjson';
import * as trpc from '@trpc/server';
import * as trpcNext from '@trpc/server/adapters/next';
import { z } from 'zod';

/**
 * This is where we're going to import the prisma client to hit the db
 * to get data.
 */
export const appRouter = trpc
    .router()
    .transformer(superjson)
    .query("hello", {
        input: z
            .object({
                text: z.string().nullish()
            })
            .nullish(),
    resolve({ input }) {
        return {
            greeting: `hello ${input?.text ?? 'world'}`
        };
    }
});

export type AppRouter = typeof appRouter;

export default trpcNext.createNextApiHandler({
    router: appRouter,
    createContext: () => null
});
- `npm i -S @trpc/client @trpc/server cors superjson`
- renamed `libs/backend/rankle-core/src/lib/backend-rankle-core.ts` to `libs/backend/rankle-core/src/lib/router.ts` and added a `context.ts` next to it.
- Add express-style context to context.ts
- add simple hello route and procedure to router.ts
- exported both files' contents from the rankle-core index.ts barrel file

--

- Updated `apps/rankle-be/main.ts` to use our core lib
- Use cors, middleware logging, and fallback.
- Add an npm command to run our BE: `npm run dev:be`
- Run that and test it in the browser at: `http://localhost:3333/api/hello`

import { createTRPCRouter } from "~/server/api/trpc";
import { exampleRouter } from "~/server/api/routers/example";
import { usuariosRouter } from '~/server/api/routers/usuarios'

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  usuarios: usuariosRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;

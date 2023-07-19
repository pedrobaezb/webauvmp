FROM node:18.16.1-alpine3.18 as builder
COPY . /app
WORKDIR /app
ENV NODE_ENV production
RUN corepack enable
RUN corepack prepare pnpm@8.6.7 --activate
RUN pnpm install --force --frozen-lockfile
RUN pnpm build

FROM node:18.16.1-alpine3.18
# USER node
COPY --from=builder /app/.next /app/.next
COPY --from=builder /app/public /app/public
COPY --from=builder /app/package.json /app
COPY --from=builder /app/pnpm-lock.yaml /app
WORKDIR /app
ENV NODE_ENV production
RUN corepack enable
RUN corepack prepare pnpm@8.6.7 --activate
RUN pnpm install --prod --frozen-lockfile
ENTRYPOINT [ "pnpm", "start" ]
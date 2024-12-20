FROM node:22.12.0-alpine3.21 AS builder
RUN corepack enable pnpm
RUN corepack use pnpm@9.15.0
COPY . /build
WORKDIR /build
RUN pnpm install
ENV NEXT_TELEMETRY_DISABLED=1
RUN pnpm build

FROM node:22.12.0-alpine3.21
RUN npm i -g cross-spawn@7.0.6
ENV NODE_ENV=production
ENV NEXT_SHARP_PATH=/usr/local/lib/node_modules/sharp
ENV PORT=8080
RUN npm i -g sharp@0.33.1
USER node
COPY --from=builder --chown=node:node /build/.next/standalone/ /app/.next/standalone/
COPY --from=builder --chown=node:node /build/.next/static/ /app/.next/standalone/.next/static/
COPY --from=builder --chown=node:node /build/public/ /app/.next/standalone/public/
EXPOSE 8080
ENTRYPOINT ["node", "app/.next/standalone/server.js"]

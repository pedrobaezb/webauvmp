FROM node:20.10.0-alpine3.18 as builder
RUN corepack enable
RUN corepack prepare pnpm@8.13.0 --activate
COPY . /build
WORKDIR /build
RUN pnpm install
ENV NEXT_TELEMETRY_DISABLED 1
RUN pnpm build

FROM node:20.10.0-alpine3.18
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

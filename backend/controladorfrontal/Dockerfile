FROM node:18.14.2-alpine AS builder
RUN apk add --no-cache libc6-compat
WORKDIR /build
RUN npm i -g pnpm@7.27.0
COPY package.json pnpm-lock.yaml /build/
RUN pnpm i --frozen-lockfile
COPY ./ /build/
RUN pnpm compile

FROM node:18.14.2-alpine
RUN apk add --no-cache libc6-compat
RUN npm i -g pnpm@7.27.0

USER 1001
WORKDIR /app
ENV NODE_ENV production
COPY --from=builder /build/package.json /build/pnpm-lock.yaml /app/
RUN pnpm install --frozen-lockfile
COPY --from=builder /build/dist /app/dist
ENV PORT 4000
EXPOSE 4000
ENTRYPOINT ["pnpm", "start"]

FROM node:18.16.1-alpine3.18 as builder
COPY . /app
WORKDIR /app
ENV NODE_ENV production
RUN corepack enable
RUN corepack prepare yarn@3.6.1 --activate
ENV NODE_ENV production
RUN yarn
RUN yarn run build

FROM node:18.16.1-alpine3.18
# USER node
COPY --from=builder /app/.next /app/.next
COPY --from=builder /app/public /app/public
#COPY --from=builder /app/package.json /app
COPY --from=builder /app/yarn.lock /app
WORKDIR /app
ENV NODE_ENV production
RUN corepack enable
RUN corepack prepare yarn@3.6.1 --activate
#RUN pnpm install --prod --frozen-lockfile
ENTRYPOINT [ "yarn", "run", "start" ]
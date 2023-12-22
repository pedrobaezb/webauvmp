FROM node:20.10.0-alpine3.18 as builder
RUN corepack enable
RUN corepack prepare yarn@4.0.2 --activate
COPY . /app
WORKDIR /app
ENV NODE_ENV production
RUN yarn
RUN yarn run build

FROM node:20.10.0-alpine3.18
USER node
#RUN corepack enable
#RUN corepack prepare yarn@4.0.2 --activate
#COPY --from=builder /app/package.json /app/yarn.lock /app/.pnp* /app/
#COPY --from=builder /app/.yarn/cache /app/.yarn/cache
#COPY --from=builder /app/.next /app/.next
#COPY --from=builder /app/public /app/public
#COPY --from=builder /app/next.config.js /app/


COPY --from=builder /app/.next/standalone/ .next/standalone/
COPY --from=builder /app/.next/static/ .next/standalone/.next/static/
COPY --from=builder /app/public/ .next/standalone/public/ 
#WORKDIR /app
#ENV NODE_ENV production
#RUN yarn
EXPOSE 80
#ENTRYPOINT [ "yarn", "run", "start" ]
ENTRYPOINT ["node", ".next/standalone/server.js"]


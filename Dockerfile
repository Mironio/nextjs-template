# todo use image from the artifactory BA-649
FROM node:20-alpine
USER root
WORKDIR /app
RUN apk add --no-cache libc6-compat

ENV npm_config_cache /app/.npm-cache

# https://tech.competa.com/standalone-deployment-of-nextjs-3286490cb39b
COPY public /app/public
COPY .next/standalone /app
COPY .next/static /app/.next/static

RUN mkdir -p /app/.npm-cache && chown -R 2000:2000 /app/.npm-cache
RUN chown -R 2000:2000 /app

EXPOSE 3000
ENV PORT 3000

CMD ["node", "server.js"]

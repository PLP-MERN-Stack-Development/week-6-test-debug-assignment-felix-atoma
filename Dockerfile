# This is a generic Dockerfile - actual ones should be in client/ and server/
FROM node:18-alpine

WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN pnpm install

COPY . .

CMD ["pnpm", "start"]
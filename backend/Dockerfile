FROM node:lts-alpine

WORKDIR /app

RUN npm add -g pnpm

COPY package.json pnpm-lock.yaml ./

RUN pnpm install

COPY . .

EXPOSE 3001

CMD ["pnpm", "run", "dev"]
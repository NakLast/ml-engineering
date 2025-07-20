FROM node:lts-alpine

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN pnpm install

COPY . .

EXPOSE 3001

CMD ["pnpm", "run", "dev"]
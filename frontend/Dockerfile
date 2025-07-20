FROM node:22

WORKDIR /app

COPY package*.json ./

RUN pnpm install

COPY . .

EXPOSE 4173

CMD ["pnpm", "run", "dev", "--", "--host"]

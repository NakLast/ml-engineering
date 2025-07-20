FROM node:22

WORKDIR /app

RUN npm add -g pnpm

COPY package*.json ./

RUN pnpm install

COPY . .

EXPOSE 4173

CMD ["pnpm", "run", "dev", "--", "--host"]

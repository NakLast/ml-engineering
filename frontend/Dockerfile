FROM node:22

ENV PNPM_HOME="/pnpm-global"
ENV PATH="$PNPM_HOME:$PATH"

WORKDIR /app

RUN npm install -g pnpm

COPY package*.json ./


RUN pnpm install

COPY . .

RUN pnpm run build  

RUN pnpm add -g serve

EXPOSE 4173



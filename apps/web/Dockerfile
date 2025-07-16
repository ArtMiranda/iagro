FROM node:22-alpine

WORKDIR /usr/src/app

COPY pnpm-lock.yaml pnpm-workspace.yaml ./
COPY nx.json ./
COPY tsconfig.base.json ./
COPY package.json ./

RUN corepack enable
RUN pnpm install --frozen-lockfile

COPY . .

RUN npx nx build web

EXPOSE 3000

CMD ["npx", "nx", "start", "web"]

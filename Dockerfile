FROM node:24-alpine AS builder

WORKDIR /app

RUN corepack enable && corepack prepare pnpm@10.15.0 --activate

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY . .
RUN pnpm build

FROM nginx:1.29-alpine

COPY --from=builder /app/doc_build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

FROM node:18-alpine
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
# Create app directory
WORKDIR /app

COPY package*.json ./
COPY pnpm-lock.yaml ./

RUN pnpm install
COPY . . 
EXPOSE 5000

RUN npx prisma migrate deploy 
RUN npx prisma generate
CMD [ "pnpm", "run", "dev" ]
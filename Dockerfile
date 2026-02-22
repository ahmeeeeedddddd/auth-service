FROM node:18-alpine

WORKDIR /app

COPY package.json package-lock.json /app/
RUN npm ci

COPY src /app/src
COPY data /app/data
COPY tests /app/tests

USER node

HEALTHCHECK --interval=30s CMD node -e "require('./src/index.js')"

CMD ["node", "src/index.js"]
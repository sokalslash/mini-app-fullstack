  FROM node:20
  WORKDIR /app/server
  COPY server/package*.json ./
  RUN npm install
  COPY server/ ./
  RUN npm run build
  CMD ["node", "dist/index.js"]
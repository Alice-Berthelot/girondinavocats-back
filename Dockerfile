FROM node:18
# using a fixed version rather than "node:latest" will avoid errors in the prod

WORKDIR /app

COPY package*.json ./
RUN npm install --production

COPY . .

EXPOSE 3310  # ou le port que tu utilises, cf. .env

CMD ["node", "server.js"]

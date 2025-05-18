FROM node:20
# using a fixed version rather than "node:latest" will avoid errors in the prod

WORKDIR /app

COPY package*.json ./
RUN npm install --production

COPY . .

EXPOSE 8080

CMD ["sh", "-c", "node bin/migrate.js && node bin/seed.js && node server.js"]


FROM node:15.8.0-alpine3.10

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

ENV PORT=8000

EXPOSE 8000

CMD ["npm", "run", "serve"]




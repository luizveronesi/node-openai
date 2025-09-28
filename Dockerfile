FROM node:20-alpine
WORKDIR /app
COPY package.json /app

RUN npm install
COPY . /app

CMD npm start
EXPOSE 80
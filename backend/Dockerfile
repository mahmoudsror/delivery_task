FROM node:8.11.3-alpine
RUN npm install -g nodemon
WORKDIR /server
COPY package.json .

RUN npm i
COPY . .

EXPOSE 3000
FROM node:8.11.3
WORKDIR /frontend
RUN npm install npm@latest -g
COPY package.json /frontend
COPY package-lock.json /frontend
RUN npm install
COPY . /frontend
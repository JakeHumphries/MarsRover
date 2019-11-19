# first stage: build dependencies
FROM node:11.15.0-alpine AS build

ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

# extra dependencies other than js
RUN apk add --no-cache python make g++

COPY package*.json ./
# RUN npm ci
RUN npm install

# second stage: move built deps and code to final container
FROM node:11.15.0-alpine

WORKDIR /usr/src/app
COPY --from=build node_modules node_modules

COPY . .
EXPOSE 5000
CMD [ "npm", "start" ]
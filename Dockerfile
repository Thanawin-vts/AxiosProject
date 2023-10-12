FROM node:15.14.0-alpine3.10 AS builder
WORKDIR /myweb

COPY ./package.json ./package-lock.json ./
RUN npm install

ENV PATH="./node_modules/.bin:$PATH"
COPY . ./
# RUN ng build --prod

FROM nginx:1.19.10-alpine
COPY --from=builder /myweb/dist/axios-project /usr/share/nginx/html
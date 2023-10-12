# FROM node:15.14.0-alpine3.10 AS builder
# WORKDIR /app

# COPY ../package*.json ./
# RUN npm install

# # ENV PATH="./node_modules/.bin:$PATH"
# COPY .. ./
# # RUN ng build --prod

FROM first
# COPY --from=builder ./myweb/dist/axios-project /usr/share/nginx/html
WORKDIR /myweb
# RUN npm install
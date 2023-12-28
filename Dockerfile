FROM node:18.18.2-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

#FROM nginx:stable 
# alpine based image lightweight
FROM nginx:stable-alpine 

COPY --from=build /app/dist/birthday-frontend /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 4200


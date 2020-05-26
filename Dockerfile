FROM node:12.7-alpine AS build
WORKDIR /usr/src/soilplus
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:1.17.1-alpine
COPY --from=build /usr/src/soilplus/dist/SoilApp /usr/share/nginx/html


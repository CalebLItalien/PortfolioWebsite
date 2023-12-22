FROM node:14 AS frontend-build
WORKDIR /app
RUN npm install
COPY ./package.json ./package-lock.json ./
COPY ./ ./
RUN npm run build

FROM nginx
COPY --from=frontend-build /app/build /var/www/html
COPY ./nginx.conf /etc/nginx/nginx.conf
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]

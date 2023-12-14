# Build React Frontend
FROM node:14 AS frontend-build
WORKDIR /app
COPY ./frontend/package.json ./frontend/package-lock.json ./
RUN npm install
COPY ./frontend/ ./
RUN npm run build

# Build Rust Backend
FROM rust:1.51 as backend-build
WORKDIR /usr/src/myapp
COPY ./backend/Cargo.toml ./backend/Cargo.lock ./
COPY ./backend/src ./src
RUN cargo install --path .

# Finalize Image
FROM debian:buster-slim
COPY --from=frontend-build /app/build /var/www/html
COPY --from=backend-build /usr/local/cargo/bin/myapp /usr/local/bin/myapp
COPY ./public/resume.pdf /var/www/html/resume.pdf  

EXPOSE 8080
CMD ["myapp"]  # Run your application

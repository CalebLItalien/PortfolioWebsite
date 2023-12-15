# Build React Frontend
FROM node:14 AS frontend-build
WORKDIR /app
COPY ./frontend/package.json ./frontend/package-lock.json ./
RUN npm install
COPY ./frontend/ ./
RUN npm run build

# Build Rust Backend
FROM rust:1.73.0 as backend-build
WORKDIR /usr/src/myapp
COPY ./api/Cargo.toml ./api/Cargo.lock ./
COPY ./api/src ./src
RUN cargo install --path .

# Finalize Image
FROM debian:buster-slim
RUN apt-get update \
    && apt-get install -y --no-install-recommends openssl libssl1.1 \
    && rm -rf /var/lib/apt/lists/*
COPY --from=frontend-build /app/build /var/www/html
COPY --from=backend-build /usr/local/cargo/bin/resume-website-generator /usr/local/bin/resume-website-generator
COPY ./frontend/public/resume.pdf /var/www/html/resume.pdf  

EXPOSE 8080
CMD ["resume-website-generator"]

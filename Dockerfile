# Build React Frontend
FROM node:14 AS frontend-build
WORKDIR /app
COPY ./frontend/package.json ./frontend/package-lock.json ./
RUN echo "Compiling Frontend"
RUN npm install
COPY ./frontend/ ./
RUN npm run build

# Build Rust Backend
FROM rust:1.73.0 as backend-build
WORKDIR /usr/src/myapp
COPY ./api/Cargo.toml ./api/Cargo.lock ./
COPY ./api/src ./src
RUN echo "Compiling Backend"
RUN cargo install --path .

# Finalize Image
FROM debian:bookworm-slim

RUN echo "Installing Dependencies"
RUN apt-get update \
    && apt-get install -y --no-install-recommends \
        nginx \
        openssl \
        libssl-dev \
        build-essential \
        curl \
        ca-certificates \
        zlib1g-dev \
    && rm -rf /var/lib/apt/lists/*

RUN echo "Linking OpenSSL"
RUN curl -fsSL https://www.openssl.org/source/openssl-3.0.0.tar.gz -o openssl.tar.gz \
    && tar -zxf openssl.tar.gz \
    && cd openssl-3.0.0 \
    && ./config --prefix=/usr/local/ssl --openssldir=/usr/local/ssl shared zlib \
    && make \
    && make install

RUN ldconfig /usr/local/ssl/lib

RUN echo "Serving Static Files"
COPY ./nginx.conf /etc/nginx/nginx.conf

COPY --from=frontend-build /app/build /var/www/html
COPY --from=backend-build /usr/local/cargo/bin/resume-website-generator /usr/local/bin/resume-website-generator

COPY ./frontend/public/resume.pdf /var/www/html/resume.pdf  

# Liftoff
RUN echo "Liftoff"
EXPOSE 8080 8081
CMD nginx -g 'daemon off;' && resume-website-generator
